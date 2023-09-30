"use client";

import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ProductImage from "./ProductImage";
import QuantityCounter from "./QuantityCounter";
import trashCan from "../trashcan.svg";

export interface CartItemProps {
  productImage: {
    src: string;
    alt: string;
  };
  productLink: ReactNode;
  price: string;
  quantity: number;
  size?: string;
  color?: string;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  return (
    <div className="h-auto bg-neutral flex justify-between p-4">
      <div>
        <ProductImage {...props.productImage} />
        <div className="cursor-pointer flex flex-row text-sm underline font-roboto mt-auto">
          <Image
            src={trashCan}
            alt="Trash Can"
            width={20}
            height={10}
            className="mr-2"
          />
          <span onClick={props.onRemove}>Remove Item</span>
        </div>
      </div>

      <div className=" bg-neutral h-auto flex flex-col w-1/2 p-4">
        <div className="text-primary text-xsm underline font font-roboto pt-4 pb-3">
          {props.productLink}
        </div>

        {props.size && (
          <div className="text-sm font font-roboto">Size: {props.size}</div>
        )}

        {props.color && (
          <div className="text-sm font font-roboto">Color: {props.color}</div>
        )}

        <p className="text-sm font font-roboto pt-3">Quantity:</p>

        <QuantityCounter />

        <div className="text-accent text-sm font font-roboto pt-4">
          Price: ${props.price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
