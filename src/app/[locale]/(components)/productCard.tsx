"use client";

import { useState } from "react";
import clsx from "clsx";
import Card from "@/app/daisyui/card";
import CardMedia from "@/app/daisyui/card-media";
import CardBody from "@/app/daisyui/card-body";
import CardTitle from "@/app/daisyui/card-title";
import CardActions from "@/app/daisyui/card-actions";
import Badge from "@/app/daisyui/badge";
import Indicator from "@/app/daisyui/indicator";
import { useProductTranslation } from "@/core/client/useProductTranslation";
import { ProductCardButton } from "./productCardButton";
import { ProductRating } from "./productRating";
import { Link } from "./link";
import { QuantitySelector } from "./quantitySelector";
import { ProductPrice } from "./productPrice";
import { ProductCardVariantList } from "./productCardVariantList";
import type { TFC } from "@/core/server/useTranslationValues";
import type { ProductCardTranslations } from "@/app/translations/productCard";
import type { IGalleryProductFragment } from "@/gql/sdk";

interface ProductCardProps {
  product: IGalleryProductFragment;
  animation?: "zoom" | "bounce";
}

export const ProductCard: TFC<ProductCardProps, ProductCardTranslations> = ({
  product,
  animation,
  t,
}) => {
  const { defaultVariant, thumbnail, pricing, slug, rating } = product;
  const [variantID, setVarientID] = useState(defaultVariant?.id ?? "");
  const cardClasses = clsx("relative transition ease-in-out", {
    "hover:-translate-y-1": animation === "bounce",
  });
  const cardMediaClasses = clsx("transition ease-in-out", {
    "hover:scale-105": animation === "zoom",
  });

  const info = useProductTranslation(product);

  return (
    <Card
      shadow="xl"
      rounded="md"
      bgBlend="darken"
      glass
      className={cardClasses}
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
            selected={variantID}
            onClick={setVarientID}
          />
          <Link
            href={`/p/${slug}`}
            className="link link-primary no-underline text-neutral hover:text-neutral mt-4"
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
            <ProductCardButton text={t["add to cart"]} variantID={variantID} />
          </CardActions>
        </CardBody>
      </Indicator>
    </Card>
  );
};
