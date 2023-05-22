"use client";

import { productCardTranslationKeys } from "@/app/translations/productCard";
import { useApp } from "@/core/client/useApp";
import { useCheckout } from "@/core/client/useCheckout";
import { useProductSelection } from "@/core/client/useProductSelection";
import { useTranslationValues } from "@/core/server/useTranslationValues";
import type { FC } from "react";

export const AddToCartButton: FC = () => {
  const { selectedVariantID, quantity } = useProductSelection();
  const { addItem } = useCheckout();
  const {
    params: { locale },
  } = useApp();

  const productCardTranslations = useTranslationValues(
    locale,
    productCardTranslationKeys,
    "component"
  );

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
      {productCardTranslations["add to cart"]}
    </button>
  );
};
