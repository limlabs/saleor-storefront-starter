"use client";

import { ICheckoutCurrentCartQuery } from "@/gql/sdk";
import CartItem from "./CartItem";
import { Link } from "../../../(components)/link";

export interface CartProductGridProps {
  checkout: NonNullable<ICheckoutCurrentCartQuery["checkout"]>;
}

export const CartProductGrid = ({ checkout }: CartProductGridProps) => {
  return (
    <ul className="grid grid-cols-1 gap-12 justify-center">
      {checkout.lines.map((item, index) => (
        <CartItem
          key={index}
          productImage={{
            src: item.variant.media?.[0].url ?? "",
            alt: item.variant.name ?? "",
          }}
          price={`${item.totalPrice.net.amount}`}
          productLink={<Link href={`/p/${item.variant.product.slug}`} />}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
};
