"use client";

import { checkoutStorageKey } from "@/core/constants";
import request from "graphql-request";
import gql from "graphql-tag";
import { FC } from "react";
import { useCheckout } from "@/core/client/useCheckout";
import { useProductCard } from "@/core/client/useProductCard";

interface AddToCartButtonProps {
  text: string;
  variantID: string;
}

interface CheckoutCreateResponse {
  checkoutCreate: {
    errors: string[];
    checkout: {
      id: string;
      quantity: number;
    };
  };
}

interface CheckoutAddLineResponse {
  checkoutLinesAdd: {
    checkout: {
      lines: {
        id: string;
        variant: {
          name: string;
        };
        quantity: number;
      }[];
      quantity: number;
    };
    totalPrice: {
      gross: {
        currency: string;
        amount: number;
      };
    };
  };
}

const checkoutCreateQuery = gql`
  mutation checkoutCreate($variantID: ID!, $quantity: Int!) {
    checkoutCreate(
      input: {
        channel: "default-channel"
        lines: [{ variantId: $variantID, quantity: $quantity }]
      }
    ) {
      errors {
        message
      }
      checkout {
        id
        quantity
      }
    }
  }
`;

const checkoutAddLineQuery = gql`
  mutation checkoutAddLine($variantID: ID!, $checkoutID: ID!, $quantity: Int!) {
    checkoutLinesAdd(
      id: $checkoutID
      lines: [{ variantId: $variantID, quantity: $quantity }]
    ) {
      checkout {
        lines {
          id
          variant {
            name
          }
          quantity
        }
        totalPrice {
          gross {
            currency
            amount
          }
        }
        quantity
      }
    }
  }
`;

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
    const cookieCheckoutID = getCookie("CheckoutID");

    if (cookieCheckoutID) {
      const resp = await request<CheckoutAddLineResponse>(
        "https://liminal-labs.saleor.cloud/graphql/",
        checkoutAddLineQuery,
        {
          variantID,
          checkoutID: cookieCheckoutID,
          quantity: productQuantity,
        }
      );
      updateCheckoutQuantity(resp.checkoutLinesAdd.checkout.quantity);
      console.log(
        `New item added to checkout ${resp.checkoutLinesAdd.checkout.lines[0].id}.`
      );
    } else {
      const resp = await request<CheckoutCreateResponse>(
        "https://liminal-labs.saleor.cloud/graphql/",
        checkoutCreateQuery,
        { variantID, quantity: productQuantity }
      );
      document.cookie = [
        `${checkoutStorageKey}=${resp.checkoutCreate.checkout.id}`,
        "path=/",
        `expires=Fri, 31 Dec 9999 23:59:59 GMT`,
      ].join("; ");
      updateCheckoutQuantity(resp.checkoutCreate.checkout.quantity);
      console.log(
        `New checkout created with ID ${resp.checkoutCreate.checkout.id}`
      );
    }
    updateProductQuantity(1);
  };

  return (
    <button className="btn btn-secondary" onClick={onClickHandler}>
      {text}
    </button>
  );
};
