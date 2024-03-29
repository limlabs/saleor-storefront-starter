import { redirect } from "next/navigation";
import { gqlClient } from "@/gql";
import { getLanguageCode, withTranslations } from "@/core/server/locale";
import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";
import { AddToCartButton } from "@/app/[locale]/(components)/addToCartButton";
import { ProductVariantSelector } from "@/app/[locale]/(components)/productVariantSelector";
import { ProductSelectionProvider } from "@/core/client/useProductSelection";
import { getTranslations } from "@/core/server/getTranslations";
import { QuantitySelector } from "@/app/[locale]/(components)/quantitySelector";
import { ProductDescription } from "@/app/[locale]/(components)/productDescription";
import { ProductReviewSummary } from "@/app/[locale]/(components)/productReviewSummary";
import { ProductImageGrid } from "@/app/[locale]/(components)/productImageGrid";
import { ProductPrice } from "@/app/[locale]/(components)/productPrice";
import { ResolvingMetadata, ResolvedMetadata } from "next";

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const languageCode = getLanguageCode(params.locale);
  const { product } = await gqlClient.Product({
    slug: params.slug,
    languageCode,
    channel: params.channel,
  });

  if (!product) {
    return {
      ...parent,
      title: "404",
    };
  }

  const productTitle =
    product.translation?.seoTitle ||
    product.seoTitle ||
    product.translation?.name ||
    product.name ||
    "";
  const seoDescription =
    product.translation?.seoDescription || product.seoDescription;

  return {
    ...parent,
    title: productTitle,
    description: seoDescription,
    openGraph: {
      type: "article",
      title: productTitle,
      locale: params.locale,
      url: `/${params.locale}/${params.channel}/p/${params.slug}`,
      images: [product.thumbnail?.url],
      description: seoDescription,
    },
  };
}

export default withTranslations<PageProps>(async function ProductDetailsPage({
  params: { locale, channel, slug },
}) {
  const languageCode = getLanguageCode(locale);
  const [{ product }, staticTranslations] = await Promise.all([
    gqlClient.Product({ slug, languageCode, channel }),
    getTranslations(),
  ]);

  if (!product) {
    return redirect("/404");
  }

  const productDescription =
    product.translation?.description ?? product.description ?? "";

  const initialSelectedVariant =
    (product.variants?.length ?? 0) > 1 ? null : product.defaultVariant;

  if (!(initialSelectedVariant || product.defaultVariant)) {
    return redirect("/404");
  }

  return (
    <ProductSelectionProvider
      product={product}
      initialSelectedVariantID={initialSelectedVariant?.id}
    >
      <main className="lg:flex lg:justify-between lg:mx-0 mt-4">
        <section className="lg:w-2/3">
          <ProductImageGrid media={product.media} />
        </section>
        <section className="lg:w-1/3 px-6">
          <div className="text-2xl text-accent mt-6 lg:mt-0 ">
            {product.category?.translation?.name ?? product.category?.name}
          </div>
          <h1 className="text-4xl  my-2">
            {product.translation?.name ?? product.name}
          </h1>
          {(product.rating ?? 0) > 0 && (
            <ProductReviewSummary rating={product.rating as number} />
          )}
          <ProductPrice pricing={product.pricing} />
          {!initialSelectedVariant?.id && (
            <ProductVariantSelector product={product} />
          )}
          {initialSelectedVariant?.id && <QuantitySelector className="mt-4" />}
          {(product.description ?? product.translation?.description ?? "")
            .length > 0 && (
            <ProductDescription
              className="mt-5 "
              description={productDescription}
            />
          )}
          <div className="mt-5">
            <AddToCartButton
              buttonText={staticTranslations("component.add to cart")}
              confirmationTitleText={staticTranslations(
                "component.add to cart confirmation"
              )}
              confirmationCheckoutButtonText={staticTranslations(
                "component.checkout"
              )}
              confirmationContinueShoppingButtonText={staticTranslations(
                "component.continue shopping"
              )}
            />
          </div>
        </section>
      </main>
    </ProductSelectionProvider>
  );
});
