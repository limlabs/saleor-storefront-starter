"use client";

import { Link } from "@/app/[locale]/(components)/link";
import { useCheckout } from "@/core/client/useCheckout";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Indicator from "@/app/daisyui/indicator";
import type { FC } from "react";

interface CartIconProps {
  quantity?: number;
}

export const CartIcon: FC<CartIconProps> = ({ quantity }) => {
  const { checkoutQuantity } = useCheckout();
  const currentQuantity = checkoutQuantity ?? quantity;

  return (
    <Link
      href="/cart"
      aria-label="cart icon"
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
