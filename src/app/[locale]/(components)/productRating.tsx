"use client";

import clsx from "clsx";
import type { FC } from "react";

interface ProductRatingProps {
  name: string;
  rating?: number | null;
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
    <div className={classNames} >
      {/* <input type="radio" className="rating-hidden" /> */}
      <input
        tabIndex={-1}
        type="radio"      
        name={`rating-${name}`}
        aria-label="0.5 stars"
        className="mask mask-star-2 mask-half-1"
      />
      <input
        tabIndex={-1}
        type="radio"
        name={`rating-${name}`}
        aria-label="1 star"
        className="mask mask-star-2 mask-half-2"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="1.5 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="2 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="2.5 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="3 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="3.5 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
        defaultChecked
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="4 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="4.5 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        tabIndex={-1}
        type="radio"
        aria-label="5 stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
    </div>
  );
};
