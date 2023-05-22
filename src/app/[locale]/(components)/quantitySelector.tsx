"use client";

import { useProductSelection } from "@/core/client/useProductSelection";
import { FC } from "react";

export const QuantitySelector: FC = () => {
  const { quantity, updateQuantity } = useProductSelection();
  const plusHandler = () => {
    updateQuantity(quantity + 1);
  };

  const minusHandler = () => {
    if (quantity > 1) updateQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-row">
      <button
        className="btn btn-xs btn-outline btn-secondary"
        onClick={minusHandler}
      >
        -
      </button>
      <span className="px-2">{quantity}</span>
      <button
        className="btn btn-xs btn-outline btn-secondary"
        onClick={plusHandler}
      >
        +
      </button>
    </div>
  );
};
