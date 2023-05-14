"use client";

import { checkoutStorageKey } from "@/core/constants";
import { gqlClient } from "@/gql";
import { useCheckout } from "@/core/client/useCheckout";
import { useProductCard } from "@/core/client/useProductCard";
import type { FC } from "react";

interface AddToCartButtonProps {
  text: string;
  variantID: string;
}

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

export const ProductCardButton: FC<AddToCartButtonProps> = ({
  text,
  variantID,
}) => {
  const { updateCheckoutQuantity } = useCheckout();
  const { productQuantity, updateProductQuantity } = useProductCard();

  const onClickHandler = async () => {
    const checkoutID = getCookie("CheckoutID");

    if (checkoutID) {
      const resp = await gqlClient.checkoutLinesAdd({
        variantID,
        checkoutID,
        quantity: productQuantity,
      });
      const checkout = resp?.checkoutLinesAdd?.checkout;
      if (checkout) {
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New item added to checkout ${checkout.lines[0].id}.`);
      }
    } else {
      const resp = await gqlClient.checkoutCreate({
        variantID,
        quantity: productQuantity,
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
    updateProductQuantity(1);
  };

  return (
    <button className="btn btn-primary" onClick={onClickHandler}>
      {text}
    </button>
  );
};
