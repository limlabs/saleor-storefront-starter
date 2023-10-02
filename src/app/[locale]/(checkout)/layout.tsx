import { getCheckoutID } from "@/core/server/checkout";
import { uncachedGqlClient } from "@/gql";
import { RedirectType, redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { OrderSummaryProvider } from "./checkout/_components/orderSummaryProvider";

export default async function CheckoutLayout({
  params,
  children,
}: PropsWithChildren<{ params: { locale: string } }>) {
  const checkoutID = getCheckoutID();
  if (!checkoutID) {
    redirect(`/${params.locale}/cart`, RedirectType.push);
  }

  const response = await uncachedGqlClient.CheckoutOrderSummary({
    checkoutID,
  });

  if (!response.checkout) {
    redirect(`/${params.locale}/cart`, RedirectType.push);
  }

  return (
    <OrderSummaryProvider initialOrderSummary={response.checkout}>
      <div className="px-4 xl:px-0">{children}</div>
    </OrderSummaryProvider>
  );
}
