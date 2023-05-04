import Drawer from "@/app/daisyui/drawer";
import { CheckoutProvider } from "@/core/client/useCheckout";
import { getCheckoutID } from "@/core/server/checkout";
import request from "graphql-request";
import gql from "graphql-tag";
import { FC, ReactNode, Suspense, use } from "react";
import { RootLayoutHeader } from "./header";

interface CheckoutQuantityResponse {
  checkout: {
    quantity: number;
  };
}

/* @ts-expect-error Async Server Component */
export const AppRoot: FC<{ children: ReactNode }> = async ({ children }) => {
  const checkoutID = getCheckoutID();

  const checkoutQuantityQuery = gql`
    query getCheckoutQuantity($id: ID) {
      checkout(id: $id) {
        quantity
      }
    }
  `;

  let quantity = 0;

  if (checkoutID !== "") {
    const resp = await request<CheckoutQuantityResponse>(
      "https://liminal-labs.saleor.cloud/graphql/",
      checkoutQuantityQuery,
      { id: checkoutID }
    );
    quantity = resp.checkout?.quantity;
  }
  if (checkoutID !== "") {
    const resp = await request<CheckoutQuantityResponse>(
      "https://liminal-labs.saleor.cloud/graphql/",
      checkoutQuantityQuery,
      { id: checkoutID }
    );
    quantity = resp.checkout?.quantity;
  }

  return (
    <CheckoutProvider initialQuantity={quantity}>
      <div className=" w-screen h-full ">
        <Drawer>{children}</Drawer>
      </div>
    </CheckoutProvider>
  );
};
