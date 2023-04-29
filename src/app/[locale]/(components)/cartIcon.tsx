"use client";

import Link from "next/link";
import { useCheckout } from "@/core/client/useCheckout";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import Indicator from "@/app/daisyui/indicator";

export const CartIcon: FC = () => {
  const { checkoutQuantity } = useCheckout();
  return (
    <Link href="/cart" className="flex flex-row align-middle text-secondary">
      <Indicator show={checkoutQuantity > 0} top end content={checkoutQuantity} className="text-[12px] badge-primary">
        <ShoppingCartIcon className="w-6 h-6" />
      </Indicator>
    </Link>
  );
};
