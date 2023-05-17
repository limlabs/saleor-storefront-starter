import Image from "next/image";
import { gqlClient } from "@/gql";
import { getLanguageCode } from "@/core/server/getLanguageCode";
import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";
import { IProductVariantFragment } from "@/gql/sdk";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
    slug: string;
  };
}

const ImageGrid = ({
  variant,
}: {
  variant?: IProductVariantFragment | null;
}) => {
  if (!variant?.media) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {variant.media.map((media) => (
        <Image
          key={media.url}
          src={media.url}
          width={420}
          height={420}
          alt={media.alt}
        />
      ))}
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return <div>Rating: {rating}</div>;
};

const ProductVariantAttributeSelectorOption = ({
  variant,
  attributeId,
}: {
  variant: IProductVariantFragment;
  attributeId: string;
}) => {
  const { attribute, values } =
    variant.attributes.find(({ attribute }) => attribute.id === attributeId) ??
    {};

  if (!attribute) {
    return null;
  }

  const text = values?.map((v) => v.translation?.name ?? v.name).join(", ");
  return <button>{text}</button>;
};

const ProductVariantAttributeSelector = ({
  attributeId,
  variants,
}: {
  attributeId: string;
  variants: IProductVariantFragment[];
}) => {
  const { attribute } =
    variants[0].attributes.find(
      ({ attribute }) => attribute.id === attributeId
    ) ?? {};

  if (!attribute) {
    return null;
  }

  return (
    <div>
      <h4>{attribute.translation?.name ?? attribute.name}</h4>
      <ul>
        {variants.map((variant) => (
          <li key={variant.id}>
            <ProductVariantAttributeSelectorOption
              variant={variant}
              attributeId={attributeId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default async function Pdp({
  params: { locale, channel, slug },
}: PageProps) {
  const languageCode = getLanguageCode(locale);
  const { product } = await gqlClient.Product({ slug, languageCode, channel });

  if (!product) {
    return redirect("/404");
  }

  /**
   * Considerations
   *
   * - What if less than 4 (or 6) images?
   * - What if no images (less important / likely)?
   */

  return (
    <main className="lg:flex lg:justify-between">
      <section className="lg:w-2/3">
        <ImageGrid variant={product.defaultVariant} />
      </section>
      <section className="lg:w-1/3">
        <h4 className="text-2xl">
          {product.category?.translation?.name ?? product.category?.name}
        </h4>
        <h1 className="text-5xl">
          {product.translation?.name ?? product.name}
        </h1>
        {(product.rating ?? 0) > 0 && (
          <StarRating rating={product.rating as number} />
        )}
        {product.defaultVariant?.attributes.map(({ attribute }) => (
          <ProductVariantAttributeSelector
            key={attribute.id}
            attributeId={attribute.id}
            variants={product.variants ?? []}
          />
        ))}
      </section>
    </main>
  );
}
