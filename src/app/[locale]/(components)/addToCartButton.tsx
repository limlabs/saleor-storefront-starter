"use client";

import { productCardTranslationKeys } from "@/app/translations/productCard";
import { useCheckout } from "@/core/client/useCheckout";
import { useProductSelection } from "@/core/client/useProductSelection";
import { useTranslationValues } from "@/core/server/useTranslationValues";
import { LocalizedClientComponentProps } from "@/locale-config";
import type { FC } from "react";

export const AddToCartButton: FC<LocalizedClientComponentProps> = ({
  locale,
}) => {
  const { selectedVariantID, quantity } = useProductSelection();
  const { addItem } = useCheckout();
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
