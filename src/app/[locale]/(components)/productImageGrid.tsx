"use client";

import Image from "next/image";
import { IProductMedia, IProductVariantFragment } from "@/gql/sdk";
import { FC } from "react";
import { useProductSelection } from "@/core/client/useProductSelection";

/**
 * Considerations
 *
 * - What if less than 4 (or 6) images?
 * - What if no images (less important / likely)?
 */

interface ProductImageGridProps {
  initialVariant: IProductVariantFragment | null | undefined;
}

const SingleImage: FC<{ url?: string; alt?: string }> = ({ url, alt }) => {
  return (
    <div className="flex justify-center items-center pr-8 pt-2">
      <Image
        key={url}
        src={url ?? ""}
        alt={alt ?? ""}
        width={840}
        height={840}
        className="bg-neutral block"
      />
    </div>
  );
};

export const ProductImageGrid: FC<ProductImageGridProps> = ({
  initialVariant,
}) => {
  const { selectedVariant } = useProductSelection();
  const variant = selectedVariant ?? initialVariant;

  if (!variant?.media) {
    return null;
  }

  if (variant.media.length === 1) {
    const { url, alt } = variant.media[0] as IProductMedia;
    return <SingleImage url={url} alt={alt} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {variant.media.map((media) => (
        <Image
          key={media.url}
          src={media?.url ?? ""}
          alt={media?.alt ?? ""}
          width={420}
          height={420}
          className="bg-neutral"
        />
      ))}
    </div>
  );
};
