import { useProductSelection } from "@/core/client/useProductSelection";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { createPortal } from "react-dom";
import { ProductPrice } from "./productPrice";

interface AddToCartConfirmationProps {
  onClose: () => void;
}

const ProductAttributeSummary: FC = () => {
  const { selectedVariant } = useProductSelection();
  return (
    <>
      {selectedVariant?.attributes?.map(({ attribute, values }, index) => {
        const content = (
          <div key={attribute.id}>
            <label className="mr-2 font-semibold">
              {attribute?.translation?.name ?? attribute?.name}
            </label>
            <span>
              {values
                .map((v) => v.translation?.name ?? v.name ?? "")
                .join(", ")}
            </span>
          </div>
        );

        if (index < selectedVariant.attributes.length - 1) {
          return <>{content},</>;
        }

        return content;
      })}
    </>
  );
};

export const AddToCartConfirmation: FC<AddToCartConfirmationProps> = ({
  onClose,
}) => {
  "use client";

  const { product } = useProductSelection();
  const target = document.getElementById("modal-root");
  const thumbnail = product.thumbnail;
  if (!target) return null;

  return createPortal(
    <div
      id="cartModal"
      className="fixed inset-0 flex items-center justify-center z-10 bg-base-100 bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="animate-fade-down bg-opacity-95 bg-gradient-to-b to-accent from-secondary w-96 rounded shadow text-base-300 p-8">
        <h1 className="mb-4 text-sm font-bold text-primary">
          Item added to cart successfully!
        </h1>
        <div className="grid grid-flow-col sm:grid-col md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-span-1">
            <Image
              src={thumbnail?.url ?? ""}
              width={100}
              height={100}
              alt={thumbnail?.alt ?? ""}
              className="bg-warning rounded-full p-2"
            />
          </div>
          <div className="col-span-2 text-lg">
            <h2 className="font-semibold">
              {product.translation?.name ?? product.name}
            </h2>
            <h3>
              <ProductAttributeSummary />
            </h3>
            <h3>
              <ProductPrice pricing={product.pricing} textColor="info" />
            </h3>
          </div>
        </div>
        <Link className="btn btn-primary mt-4 w-full" href="/checkout">
          Checkout
        </Link>
        <button className="btn btn-info mt-4 w-full" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>,
    target,
    "addToCartConfirmation"
  );
};
