"use client";

import { useCheckout } from "@/core/client/useCheckout";
import { useProductSelection } from "@/core/client/useProductSelection";
import type { FC, ReactNode } from "react";

interface AddToCartButtonProps {
  children: ReactNode;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ children }) => {
  const { selectedVariantID, quantity } = useProductSelection();
  const { addItem } = useCheckout();

  const onClickHandler = () => {
    if (!selectedVariantID) return;

    addItem(selectedVariantID, quantity);
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClickHandler}
      disabled={!selectedVariantID || quantity < 1}
    >
      {children}
    </button>
  );
};
