"use client";

import Image from "next/image";
import { IProductDetailsFragment, IProductVariantFragment } from "@/gql/sdk";
import { FC } from "react";
import { useProductSelection } from "@/core/client/useProductSelection";
import CardMedia from "@/app/daisyui/card-media";

/**
 * Considerations
 *
 * - What if less than 4 (or 6) images?
 * - What if no images (less important / likely)?
 */

interface ProductImageGridProps {
  initialVariant: IProductVariantFragment | null | undefined;
}

export const ProductImageGrid: FC<ProductImageGridProps> = ({
  initialVariant,
}) => {
  const { selectedVariant } = useProductSelection();
  const variant = selectedVariant ?? initialVariant;

  if (!variant?.media) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {variant.media.map((media) => (
        <CardMedia
          key={media.url}
          accentBg
          src={media?.url ?? ""}
          alt={media?.alt ?? ""}
          width={420}
          height={420}
        />
      ))}
    </div>
  );
};
