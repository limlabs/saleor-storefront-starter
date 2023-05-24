"use client";

import { useCheckout } from "@/core/client/useCheckout";
import { useProductSelection } from "@/core/client/useProductSelection";
import { FC, ReactNode, useState } from "react";
import { AddToCartConfirmation } from "./addToCartConfirmation";

interface AddToCartButtonProps {
  buttonText: ReactNode;
  confirmationTitleText: ReactNode;
  confirmationCheckoutButtonText: ReactNode;
  confirmationContinueShoppingButtonText: ReactNode;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  buttonText,
  confirmationTitleText,
  confirmationCheckoutButtonText,
  confirmationContinueShoppingButtonText,
}) => {
  const { selectedVariantID, quantity } = useProductSelection();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const { addItem } = useCheckout();

  const onClickHandler = () => {
    if (!selectedVariantID) return;

    addItem(selectedVariantID, quantity);
    setConfirmationOpen(true);
  };

  const onCloseHandler = () => {
    console.log("modal close handler");
    setConfirmationOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={onClickHandler}
        disabled={!selectedVariantID || quantity < 1}
      >
        {buttonText}
      </button>
      {confirmationOpen && (
        <AddToCartConfirmation
          onClose={onCloseHandler}
          titleText={confirmationTitleText}
          checkoutButtonText={confirmationCheckoutButtonText}
          continueShoppingButtonText={confirmationContinueShoppingButtonText}
        />
      )}
    </>
  );
};
