"use client";

import { useMemo } from "react";
import Badge from "@/app/daisyui/badge";
import clsx from "clsx";
import { Link } from "./link";
import type { FC } from "react";
import type { ProductTranslation } from "@/core/client/useProductTranslation"; 

type VariantSelectHandler = (id: string) => void;
type ProductVariant = NonNullable<ProductTranslation['variants']>[number]

interface ProductCardVariantListProps {
  slug: string;
  variants: ProductVariant[];
  selected?: string;
  className?: string;
  onClick?: VariantSelectHandler;
}

const renderVariantItem = (
  slug: string,
  selected?: string,
  onClick?: VariantSelectHandler
) => {
  return function mapper(item: ProductVariant) {
    if (item.id === "rest") {
      return (
        <Link href={`/p/${slug}`} className="inline-flex" key={item.id}>
          <Badge className="badge-accent ml-2 cursor-pointer" outline>
            {item.name}
          </Badge>
        </Link>
      );
    }
    if (item.id !== item.name) {
      return (
        <Badge
          className="badge-accent ml-2 cursor-pointer"
          outline={selected !== item.id}
          onClick={() => onClick?.(item.id)}
          key={item.id}
        >
          {item.name}
        </Badge>
      );
    }
  };
};

export const ProductCardVariantList: FC<ProductCardVariantListProps> = ({
  slug,
  variants,
  selected,
  onClick,
  className,
}) => {
  const variantList = useMemo(() => {
    const list =
      variants.length > 3
        ? variants
            .slice(0, 2)
            .concat([{ id: "rest", name: `+${variants.length - 2}` }])
        : variants;
    return list.flatMap(renderVariantItem(slug, selected, onClick));
  }, [selected, variants, slug, onClick]);

  const classNames = clsx("flex", "justify-center", className);

  return <div className={classNames}>{variantList}</div>;
};

ProductCardVariantList.displayName = "ProductCardVariantList";
