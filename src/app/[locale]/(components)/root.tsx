"use server";

import { CheckoutProvider } from "@/core/client/useCheckout";
import { getCheckoutID } from "@/core/server/checkout";
import { gqlClient } from "@/gql";
import type { PropsWithChildren } from "react";

export default async function AppRoot({ children }: PropsWithChildren) {
  const checkoutID = getCheckoutID();
  let quantity = 0;

  if (checkoutID) {
    const resp = await gqlClient.CheckoutQuantity({
      id: checkoutID,
    });
    const checkout = resp.checkout;
    if (checkout) {
      quantity = checkout.quantity;
    }
  }

  return (
    <CheckoutProvider initialQuantity={quantity}>{children}</CheckoutProvider>
  );
}
