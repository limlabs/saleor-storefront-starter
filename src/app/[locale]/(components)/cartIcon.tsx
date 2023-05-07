"use client";

import { Link } from "@/app/[locale]/(components)/link";
import { useCheckout } from "@/core/client/useCheckout";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Indicator from "@/app/daisyui/indicator";
import type { FC } from "react";

export const CartIcon: FC = () => {
  const { checkoutQuantity } = useCheckout();
  return (
    <Link
      href="/cart"
      channel=""
      className="flex flex-row align-middle text-secondary"
    >
      <Indicator
        show={checkoutQuantity > 0}
        top
        end
        content={checkoutQuantity}
        className="text-[12px] badge-primary"
      >
        <ShoppingCartIcon className="w-6 h-6" />
      </Indicator>
    </Link>
  );
};
