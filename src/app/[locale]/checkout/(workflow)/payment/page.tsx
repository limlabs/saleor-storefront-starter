import { getCheckoutID } from "@/core/server/checkout";
import { redirect } from "next/navigation";
import { stripeAppId } from "@/core/constants";
import { gqlClient } from "@/gql";
import { StripeComponent } from "../../_components/stripeComponent";

export default async function CheckoutPaymentPage() {
  const checkoutID = await getCheckoutID();

  if (!checkoutID) {
    redirect("/404");
  }

  const paymentGateways = await gqlClient.CheckoutAvailablePaymentGateways({
    checkoutID: checkoutID,
  });

  const isStripeAppInstalled =
    paymentGateways.checkout?.availablePaymentGateways.some(
      (gateway) => gateway.id === stripeAppId
    );

  if (!isStripeAppInstalled) {
    return (
      <div className="text-red-500">
        Stripe App was not installed in this Saleor Cloud instance. Go to{" "}
        <a href="https://stripe.saleor.app/">stripe.saleor.app</a> and follow
        the instructions.
      </div>
    );
  }

  const transaction = await gqlClient.TransactionInitialize({
    checkoutId: checkoutID,
    data: {
      automatic_payment_methods: {
        enabled: true,
      },
    },
  });

  const stripeData = transaction.transactionInitialize?.data as
    | undefined
    | {
        paymentIntent: {
          client_secret: string;
        };
        publishableKey: string;
      };

  if (transaction.transactionInitialize?.errors.length || !stripeData) {
    return (
      <div className="text-red-500">
        <p>Failed to initialize Stripe transaction</p>
        <pre>{JSON.stringify(transaction, null, 2)}</pre>
      </div>
    );
  }

  return (
    <StripeComponent
      clientSecret={stripeData.paymentIntent.client_secret}
      publishableKey={stripeData.publishableKey}
      returnUrl="http://localhost:3000/checkout/process"
    />
  );
}
