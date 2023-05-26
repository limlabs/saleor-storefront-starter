"use client";

import { useProductSelection } from "@/core/client/useProductSelection";
import clsx from "clsx";
import { FC } from "react";

interface QuantitySelectorProps {
  className?: string;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({ className }) => {
  const { quantity, updateQuantity } = useProductSelection();
  const plusHandler = () => {
    updateQuantity(quantity + 1);
  };

  const minusHandler = () => {
    if (quantity > 1) updateQuantity(quantity - 1);
  };

  return (
    <div className={clsx("flex", "flex-row", className)}>
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
