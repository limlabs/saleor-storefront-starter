import { FC, useMemo } from "react";
import clsx from "clsx";
import Card from "@/app/daisyui/card";
import CardMedia from "@/app/daisyui/card-media";
import CardBody from "@/app/daisyui/card-body";
import CardTitle from "@/app/daisyui/card-title";
import CardActions from "@/app/daisyui/card-actions";
import { ProductCardButton } from "./productCardButton";
import { ProductRating } from "./productRating";
import Link from "next/link";
import { Product } from "@/app/types";
import { QuantitySelector } from "./quantitySelector";
import Badge from "@/app/daisyui/badge";
import { ProductPrice } from "./productPrice";
import Indicator from "@/app/daisyui/indicator";

interface ProductCardProps {
  product: Product;
  locale: string;
  animation?: "zoom" | "bounce";
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  locale,
  animation,
}) => {
  const image = product.thumbnail;
  const defID = product.defaultVariant.id;
  const { onSale, displayGrossPrices, discount, priceRange } = product.pricing;

  const variants = useMemo(() => {
    const list =
      product.variants.length > 3
        ? product.variants
            .slice(0, 2)
            .concat([{ id: "rest", name: `+${product.variants.length - 2}` }])
        : product.variants;
    return list.flatMap((item) =>
      item.name !== item.id ? (
        <Badge
          key={item.id}
          outline={defID !== item.id}
          className="badge-accent ml-2"
        >
          {item.name}
        </Badge>
      ) : undefined
    );
  }, [defID, product.variants]);

  const price = displayGrossPrices
    ? priceRange.start.gross
    : priceRange.start.net;
  const discountPrice = discount
    ? displayGrossPrices
      ? discount.gross
      : discount.net
    : null;
  const currency = priceRange.start.currency;

  const cardClasses = clsx("relative transition ease-in-out", {
    "hover:-translate-y-1": animation === "bounce",
  });
  const cardMediaClasses = clsx("transition ease-in-out", {
    "hover:scale-105": animation === "zoom",
  });

  return (
    <Card
      shadow="xl"
      rounded="md"
      bgBlend="darken"
      glass
      className={cardClasses}
    >
      <ProductRating
        name={product.slug}
        size="sm"
        rating={product.rating}
        className="absolute z-10 top-1 left-2"
      />
      <Badge className="absolute top-2 right-2 z-10 badge-accent">
        {product.category.name}
      </Badge>
      <Link
        href={`/${locale}/p/${product.slug}`}
        className="link link-primary no-underline text-secondary hover:text-secondary overflow-clip"
      >
        <CardMedia
          accentBg
          src={image.url}
          alt={image.alt}
          width={300}
          height={300}
          className={cardMediaClasses}
        />
      </Link>
      <Indicator
        show={onSale}
        center
        top
        content="Sale"
        className="badge-primary"
      >
        <CardBody className="relative">
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            {variants}
          </div>
          <Link
            href={`/${locale}/p/${product.slug}`}
            className="link link-primary no-underline text-neutral hover:text-neutral mt-4"
          >
            <CardTitle>
              <span className="truncate w-48" title={product.name}>
                {product.name}
              </span>
            </CardTitle>
          </Link>
          <div className="flex flex-row place-content-between">
            <ProductPrice
              price={price}
              discountPrice={discountPrice}
              currency={currency}
            />
            <QuantitySelector />
          </div>
          <CardActions justify="center" className="mt-4">
            <ProductCardButton
              text="Add to Cart"
              variantID={product.defaultVariant.id}
            />
          </CardActions>
        </CardBody>
      </Indicator>
    </Card>
  );
};
