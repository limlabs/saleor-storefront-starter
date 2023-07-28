"use client";

import { useProductSelection } from "@/core/client/useProductSelection";
import { FC, ReactNode, useCallback, useState, useTransition } from "react";
import { AddToCartConfirmation } from "./addToCartConfirmation";
import { useRouter } from "next/navigation";
import { addCheckoutItem } from "@/core/server/checkout";
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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null | undefined>(null);

  const addToCart = useCallback(
    (variantID: string, quantity: number) => {
      if (!selectedVariantID) return;
      startTransition(async () => {
        const { success, error } = await addCheckoutItem(variantID, quantity);
        if (!success) {
          setError(error);
          return;
        }

        setConfirmationOpen(true);
        router.refresh();
      });
    },
    [router, selectedVariantID]
  );

  const onCloseHandler = () => {
    setConfirmationOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => addToCart(selectedVariantID, quantity)}
        disabled={!selectedVariantID || isPending || quantity < 1}
      >
        {buttonText}
      </button>
      {error && (
        <div className="alert alert-error w-full text-sm" role="alert">
          {error}
        </div>
      )}
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
