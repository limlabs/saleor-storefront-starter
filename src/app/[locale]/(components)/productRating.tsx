"use client";

import clsx from "clsx";
import type { FC } from "react";

interface ProductRatingProps {
  name: string;
  rating: number;
  className?: string;
  size?: Size;
}
export const ProductRating: FC<ProductRatingProps> = ({
  rating,
  size,
  name,
  className,
}) => {
  const classNames = clsx(
    "rating",
    "rating-half",
    clsx({
      "rating-xs": size === "xs",
      "rating-sm": size === "sm",
      "rating-md": size === "md",
      "rating-lg": size === "lg",
    }),
    className
  );
  return (
    <div className={classNames}>
      {/* <input type="radio" className="rating-hidden" /> */}
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
        defaultChecked
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
    </div>
  );
};
