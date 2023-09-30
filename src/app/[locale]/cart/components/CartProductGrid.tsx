"use client";

import { ICheckoutCurrentCartQuery } from "@/gql/sdk";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { Link } from "../../(components)/link";

export interface CartProductGridProps {
  checkout: NonNullable<ICheckoutCurrentCartQuery["checkout"]>;
}

export const CartProductGrid = ({ checkout }: CartProductGridProps) => {
  const onRemoveItem = (
    item: NonNullable<ICheckoutCurrentCartQuery["checkout"]>["lines"][0]
  ) => {
    console.log(item);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row md:items-start">
      <div className="w-full md:max-w-3/4">
        <div className="grid grid-cols-1 gap-12 justify-center">
          {checkout?.lines.map((item, index) => (
            <CartItem
              key={index}
              productImage={{
                src: item.variant.media?.[0].url ?? "",
                alt: item.variant.name ?? "",
              }}
              price={`${item.totalPrice.net.amount}`}
              onRemove={() => onRemoveItem(item)}
              productLink={<Link href={`/p/${item.variant.product.slug}`} />}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:max-w-1/4 justify-center">
        <OrderSummary
          totalPrice={`$${checkout.totalPrice.net.amount.toFixed(2)}`}
        />
      </div>
    </div>
  );
};
