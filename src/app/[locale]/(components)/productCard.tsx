import clsx from "clsx";
import Card from "@/app/daisyui/card";
import CardMedia from "@/app/daisyui/card-media";
import CardBody from "@/app/daisyui/card-body";
import CardTitle from "@/app/daisyui/card-title";
import CardActions from "@/app/daisyui/card-actions";
import Badge from "@/app/daisyui/badge";
import Indicator from "@/app/daisyui/indicator";
import { useProductTranslation } from "@/core/client/useProductTranslation";
import { AddToCartButton } from "./addToCartButton";
import { ProductRating } from "./productRating";
import { Link } from "./link";
import { QuantitySelector } from "./quantitySelector";
import { ProductPrice } from "./productPrice";
import { ProductCardVariantList } from "./productCardVariantList";
import { useTranslationValues } from "@/core/server/useTranslationValues";
import type { FC } from "react";
import type { IGalleryProductFragment } from "@/gql/sdk";
import { addToCartTranslationKeys } from "@/app/translations/addToCart";
import { productCardTranslationKeys } from "@/app/translations/productCard";

interface ProductCardProps {
  product: IGalleryProductFragment;
  animation?: "zoom" | "bounce";
  className: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  animation,
  className = "",
}) => {
  const { thumbnail, pricing, slug, rating } = product;

  const cardClasses = clsx("relative transition ease-in-out", {
    "hover:-translate-y-1": animation === "bounce",
  });
  const cardMediaClasses = clsx("transition ease-in-out", {
    "hover:scale-105": animation === "zoom",
  });

  const info = useProductTranslation(product);
  const t = useTranslationValues(productCardTranslationKeys, "component");
  const translations = useTranslationValues(
    addToCartTranslationKeys,
    "component"
  );

  return (
    <Card
      shadow="xl"
      rounded="md"
      bgBlend="darken"
      glass
      className={`${cardClasses} ${className}`}
    >
      <ProductRating
        name={slug}
        size="sm"
        rating={rating}
        className="absolute z-10 top-1 left-2"
      />
      <Badge className="absolute top-2 right-2 z-10 badge-accent">
        {info.category?.name}
      </Badge>
      <Link
        href={`/p/${slug}`}
        className="link link-primary no-underline text-secondary hover:text-secondary overflow-clip"
      >
        <CardMedia
          accentBg
          src={thumbnail?.url ?? ""}
          alt={thumbnail?.alt ?? ""}
          width={300}
          height={300}
          className={cardMediaClasses}
          priority
        />
      </Link>
      <Indicator
        show={!!pricing?.onSale}
        center
        top
        content={t.sale}
        className="badge-primary"
      >
        <CardBody className="relative">
          <ProductCardVariantList
            className="absolute top-4 left-0 right-0"
            slug={slug}
            variants={info.variants ?? []}
          />
          <Link
            href={`/p/${slug}`}
            className="link link-primary no-underline  mt-4"
          >
            <CardTitle>
              <span className="truncate w-48" title={info.name ?? ""}>
                {info.name}
              </span>
            </CardTitle>
          </Link>
          <div className="flex flex-row place-content-between">
            {pricing ? <ProductPrice pricing={pricing} /> : null}
            <QuantitySelector />
          </div>
          <CardActions justify="center" className="mt-4">
            <AddToCartButton
              buttonText={translations["add to cart"]}
              confirmationTitleText={translations["add to cart confirmation"]}
              confirmationCheckoutButtonText={translations["checkout"]}
              confirmationContinueShoppingButtonText={
                translations["continue shopping"]
              }
            />
          </CardActions>
        </CardBody>
      </Indicator>
    </Card>
  );
};
