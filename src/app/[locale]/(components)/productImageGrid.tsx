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
  media: IProductVariantFragment["media"];
}

const SingleImage: FC<{ url?: string; alt?: string }> = ({ url, alt }) => {
  return (
    <div className="flex justify-center items-center lg:pr-8 lg:pt-2">
      <Image
        key={url}
        src={url ?? ""}
        alt={alt ?? ""}
        width={840}
        height={840}
        className="bg-neutral block"
        priority
      />
    </div>
  );
};

export const ProductImageGrid: FC<ProductImageGridProps> = ({ media }) => {
  if (!media) {
    return null;
  }

  if (media.length === 1) {
    const { url, alt } = media[0] as IProductMedia;
    return <SingleImage url={url} alt={alt} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {media.map((item) => (
        <Image
          key={item.url}
          src={item?.url ?? ""}
          alt={item?.alt ?? ""}
          width={420}
          height={420}
          className="bg-white"
          priority
        />
      ))}
    </div>
  );
};
