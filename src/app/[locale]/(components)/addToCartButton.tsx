"use client";

import { productCardTranslationKeys } from "@/app/translations/productCard";
import { useCheckout } from "@/core/client/useCheckout";
import { useTranslationValues } from "@/core/server/useTranslationValues";
import { Locale } from "@/locale-config";
import type { FC } from "react";

interface AddToCartButtonProps {
  locale: Locale;
  variantID?: string;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  variantID,
  locale,
}) => {
  const { addItem } = useCheckout();
  const productCardTranslations = useTranslationValues(
    locale,
    productCardTranslationKeys,
    "component"
  );

  const onClickHandler = () => {
    if (!variantID) return;

    addItem(variantID, 1);
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClickHandler}
      disabled={!variantID}
    >
      {productCardTranslations["add to cart"]}
    </button>
  );
};
