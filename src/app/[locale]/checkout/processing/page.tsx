import Stripe from "stripe";
import { redirect } from "next/navigation";
import { gqlClient } from "@/gql";
import { getCheckoutID } from "@/core/server/checkout";
import { stripeAppId } from "@/core/constants";
import { get } from "http";
import { getLocaleContext } from "@/core/server/locale";

interface CartPaymentPageProps {
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
  };
}

export default async function CartPaymentPage({
  searchParams: {
    payment_intent: paymentIntentId,
    payment_intent_client_secret: paymentIntentClientSecret,
  },
}: CartPaymentPageProps) {
  const checkoutId = getCheckoutID();
  const language = getLocaleContext().get("language");
  const checkoutAmount = (await gqlClient.CheckoutTotal({ id: checkoutId }))
    .checkout?.totalPrice.gross.amount;
  const paymentGateway = await gqlClient.PaymentGatewayInitialize({
    checkoutId,
    amount: checkoutAmount,
  });

  const stripeData =
    paymentGateway.paymentGatewayInitialize?.gatewayConfigs?.find(
      (gateway) => gateway.id === stripeAppId
    )?.data as undefined | { publishableKey: string };

  if (
    !stripeData?.publishableKey ||
    paymentGateway.paymentGatewayInitialize?.errors.length ||
    paymentGateway.paymentGatewayInitialize?.gatewayConfigs?.some(
      (gateway) => gateway.errors?.length
    )
  ) {
    return (
      <div className="text-red-500">
        <p>Failed to initialize Stripe transaction</p>
        <pre>{JSON.stringify(paymentGateway, null, 2)}</pre>
      </div>
    );
  }

  const stripe = new Stripe(stripeData.publishableKey, {
    apiVersion: "2022-11-15",
  });

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
    client_secret: paymentIntentClientSecret,
  });

  if (paymentIntent.status === "processing") {
    // @todo refresh
    return (
      <p>Payment processing. We&apos;ll update you when payment is received.</p>
    );
  }
  if (paymentIntent.status === "requires_payment_method") {
    redirect(`/${language}/cart`);
  }
  if (paymentIntent.status === "succeeded") {
    const order = await gqlClient.CheckoutComplete({ checkoutId });

    if (
      order.checkoutComplete?.errors.length ||
      order.checkoutComplete?.order?.errors.length ||
      !order.checkoutComplete?.order
    ) {
      return (
        <div className="text-red-500">
          <p>Failed to finalize order</p>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
      );
    }
    redirect(`/checkout/confirmation/${order.checkoutComplete.order.id}`);
  }
}
