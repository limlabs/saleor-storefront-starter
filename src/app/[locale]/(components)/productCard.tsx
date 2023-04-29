"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import Card from "@/app/daisyui/card";
import CardMedia from "@/app/daisyui/card-media";
import CardBody from "@/app/daisyui/card-body";
import CardTitle from "@/app/daisyui/card-title";
import CardActions from "@/app/daisyui/card-actions";
import Badge from "@/app/daisyui/badge";
import { ProductCardButton } from "./productCardButton";
import { ProductRating } from "./productRating";
import { LocaleLink } from "./localeLink";
import { QuantitySelector } from "./quantitySelector";
import { ProductPrice } from "./productPrice";
import Indicator from "@/app/daisyui/indicator";
import { ProductCardVariantList } from "./productCardVariantList";
import { useProductTranslation } from "@/core/client/useProductTranslation";

interface ProductCardProps {
  product: Product;
  animation?: "zoom" | "bounce";
}

export const ProductCard: FC<ProductCardProps> = ({ product, animation }) => {
  const {
    defaultVariant,
    thumbnail,
    pricing,
    slug,
<<<<<<< HEAD
=======
    category,
>>>>>>> main
    variants,
    rating,
  } = product;
  const { onSale } = pricing;
  const [variantID, setVarientID] = useState(defaultVariant.id);

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
<<<<<<< HEAD
        {info.category.name}
=======
        {category.name}
>>>>>>> main
      </Badge>
      <LocaleLink
        href={`/p/${slug}`}
        className="link link-primary no-underline text-secondary hover:text-secondary overflow-clip"
      >
        <CardMedia
          accentBg
          src={thumbnail.url}
          alt={thumbnail.alt}
          width={300}
          height={300}
          className={cardMediaClasses}
        />
      </LocaleLink>
      <Indicator
        show={onSale}
        center
        top
        content="Sale"
        className="badge-primary"
      >
        <CardBody className="relative">
          <ProductCardVariantList
            className="absolute top-4 left-0 right-0"
            slug={slug}
            variants={variants}
            selected={variantID}
            onClick={setVarientID}
          />
          <LocaleLink
            href={`/p/${slug}`}
            className="link link-primary no-underline text-neutral hover:text-neutral mt-4"
          >
            <CardTitle>
              <span className="truncate w-48" title={info.name}>
                {info.name}
              </span>
            </CardTitle>
          </LocaleLink>
          <div className="flex flex-row place-content-between">
            <ProductPrice pricing={pricing} />
            <QuantitySelector />
          </div>
          <CardActions justify="center" className="mt-4">
            <ProductCardButton text="Add to Cart" variantID={variantID} />
          </CardActions>
        </CardBody>
      </Indicator>
    </Card>
  );
};
