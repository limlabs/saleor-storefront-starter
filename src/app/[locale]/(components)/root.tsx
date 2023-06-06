import Drawer from "@/app/daisyui/drawer";
import { CheckoutProvider } from "@/core/client/useCheckout";
import { getCheckoutID } from "@/core/server/checkout";
import request from "graphql-request";
import gql from "graphql-tag";
import Link from "next/link";
import { FC, ReactNode, Suspense, use } from "react";
import Footer from "./footer";
import { RootLayoutHeader } from "./header";

interface CheckoutQuantityResponse {
  checkout: {
    quantity: number;
  };
}

/* @ts-expect-error Async Server Component */
export const AppRoot: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <>

      <div className="bg-almost-black">
        <Drawer />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
      <Footer />

    </>
  );
};
