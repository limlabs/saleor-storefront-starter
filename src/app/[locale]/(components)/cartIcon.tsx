"use client";
"use client";

import { useCheckout } from "@/core/client/useCheckout";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

export const CartIcon: FC = () => {
  const { checkoutQuantity } = useCheckout();
  return (
    <div className="flex flex-row justify-center items-center">
      <ShoppingCartIcon className=" w-6 h-6 hover:text-secondary cursor-pointer" />
      <div>{checkoutQuantity}</div>
    </div>
  );
};
