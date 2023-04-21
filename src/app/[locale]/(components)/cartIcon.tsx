"use client";

import Link from "next/link";
import { useCheckout } from "@/core/client/useCheckout";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

export const CartIcon: FC = () => {
  const { checkoutQuantity } = useCheckout();
  return (
    <Link href="/cart" className="flex flex-row align-middle text-secondary">
      <ShoppingCartIcon className="w-6 h-6" />
      <div className="ml-2 text-neutral">{checkoutQuantity}</div>
    </Link>
  );
};
