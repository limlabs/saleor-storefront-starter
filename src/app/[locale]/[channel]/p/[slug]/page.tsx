import Image from "next/image";
import { gqlClient } from "@/gql";
import { getLanguageCode, getLocale } from "@/core/server/locale";
import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";
import { IProductVariantFragment } from "@/gql/sdk";
import { redirect } from "next/navigation";
import { AddToCartButton } from "@/app/[locale]/(components)/addToCartButton";
import { ProductVariantSelector } from "@/app/[locale]/(components)/productVariantSelector";
import { ProductSelectionProvider } from "@/core/client/useProductSelection";
import { getTranslations } from "@/core/server/getTranslations";

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

interface SaleorContentBlockBase {
  id: string;
}

interface ParagraphBlock extends SaleorContentBlockBase {
  type: "paragraph";
  data: {
    text: string;
  };
}

type SaleorContentBlock = ParagraphBlock;

interface SaleorContentBlockData {
  time: number;
  blocks: SaleorContentBlock[];
}

const SaleorProductDescription = ({
  description,
}: {
  description: string | null | undefined;
}) => {
  let content: SaleorContentBlockData | null = null;
  try {
    content = JSON.parse(description ?? '""') as SaleorContentBlockData;
  } catch (err) {
    console.error("Error parsing JSON: ", err);
  }

  if (!content) {
    console.warn("Missing or invalid product description content");
    return null;
  }

  return (
    <div>
      {content.blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return (
              <div
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default async function ProductDetailsPage({
  params: { locale, channel, slug },
}: PageProps) {
  const languageCode = getLanguageCode(locale);
  const [{ product }, staticTranslations] = await Promise.all([
    gqlClient.Product({ slug, languageCode, channel }),
    getTranslations(getLocale()),
  ]);

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
        <ProductSelectionProvider>
          <ProductVariantSelector product={product} />
          {(product.description ?? product.translation?.description ?? "")
            .length > 0 && (
            <SaleorProductDescription
              description={
                product.translation?.description ?? product.description
              }
            />
          )}
          <div>
            <AddToCartButton>
              {staticTranslations("component.add to cart")}
            </AddToCartButton>
          </div>
        </ProductSelectionProvider>
      </section>
    </main>
  );
}
