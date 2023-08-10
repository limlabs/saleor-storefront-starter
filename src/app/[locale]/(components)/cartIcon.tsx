"use client";

import { Link } from "@/app/[locale]/(components)/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Indicator from "@/app/daisyui/indicator";
import type { FC } from "react";

interface CartIconProps {
  quantity?: number;
  a11y?: {cartIcon: string};
}


export const CartIcon: FC<CartIconProps> = ({ quantity, a11y }) => {
  const currentQuantity = quantity;


  return (
    <Link
      href="/cart"
      aria-label={a11y?.cartIcon}
      channel=""
      className="flex flex-row align-middle text-secondary"
    >
      <Indicator
        show={Number.isInteger(currentQuantity)}
        top
        end
        content={currentQuantity}
        className="text-[12px] badge-primary"
      >
        <ShoppingCartIcon className="w-6 h-6" />
      </Indicator>
    </Link>
  );
};
