"use client";

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { checkoutStorageKey } from "@/core/constants";
import { gqlClient } from "@/gql";
import { ICheckout, Maybe } from "@/gql/sdk";

export interface CheckoutContextData {
  checkoutQuantity: number;
  addItem(variantID: string, quantity: number): Promise<void>;
}

const CheckoutContext = createContext<CheckoutContextData>({
  checkoutQuantity: 0,
  addItem() {},
});

const getCookie = (name: string) => {
  const cookieInitial = name + "=";
  const cookieSearch = document.cookie
    .split("; ")
    .filter(
      (cookie) => cookie.substring(0, cookieInitial.length) === cookieInitial
    );
  if (cookieSearch.length === 0) return "";
  else
    return cookieSearch[0].substring(
      cookieInitial.length,
      cookieSearch[0].length
    );
};

export const CheckoutProvider: FC<{
  children: ReactNode;
  initialQuantity: number;
}> = ({ children, initialQuantity }) => {
  const [checkoutQuantity, updateCheckoutQuantity] = useState(initialQuantity);
  const addItem = useCallback(async (variantID: string, quantity = 1) => {
    const checkoutID = getCookie("CheckoutID");

    let checkout: ICheckout | null | undefined;
    if (checkoutID) {
      const resp = await gqlClient.checkoutLinesAdd({
        variantID,
        checkoutID,
        quantity,
      });
      checkout = resp?.checkoutLinesAdd?.checkout;
      if (checkout) {
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New item added to checkout ${checkout.lines[0].id}.`);
      }
    } else {
      const resp = await gqlClient.checkoutCreate({
        variantID,
        quantity,
      });

      const checkout = resp?.checkoutCreate?.checkout;
      if (checkout) {
        document.cookie = [
          `${checkoutStorageKey}=${checkout.id}`,
          "path=/",
          `expires=Fri, 31 Dec 9999 23:59:59 GMT`,
        ].join("; ");
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New checkout created with ID ${checkout.id}`);
      }
    }
  }, []);
  return (
    <CheckoutContext.Provider
      value={{
        checkoutQuantity,
        updateCheckoutQuantity,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
