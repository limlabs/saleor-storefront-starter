"use client";

import CartItem, { CartItemProps } from "./CartItem";
import OrderSummary from "./OrderSummary";

export interface CartProductGridProps {
  items: CartItemProps[];
}

export const CartProductGrid = ({ items }: CartProductGridProps) => {
  const totalPrice = items.reduce(
    (acc, product) => acc + parseFloat(product.price),
    0
  );

  const onRemoveItem = (item: CartItemProps) => {
    console.log(item);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row md:items-start">
      <div className="w-full md:max-w-3/4">
        <div className="grid grid-cols-1 gap-12 justify-center">
          {items.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              onRemove={() => onRemoveItem(item)}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:max-w-1/4 justify-center">
        <OrderSummary totalPrice={totalPrice.toFixed(2)} />
      </div>
    </div>
  );
};
