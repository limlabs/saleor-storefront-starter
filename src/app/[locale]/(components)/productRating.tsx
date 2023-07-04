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
    <div className={classNames}>
      {/* <input type="radio" className="rating-hidden" /> */}
      <input
        type="radio"
        name={`rating-${name}`}
        aria-label="half a start"
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${name}`}
        aria-label="one star"
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        aria-label="one and a half star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        aria-label="two star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        aria-label="two and half star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        aria-label="three star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        aria-label="three and half star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
        defaultChecked
      />
      <input
        type="radio"
        aria-label="four star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        aria-label="four and half star"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        aria-label="five stars"
        name={`rating-${name}`}
        className="mask mask-star-2 mask-half-2"
      />
    </div>
  );
};
