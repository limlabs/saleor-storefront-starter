import { useMemo } from "react";
import type { FC } from "react";
import type { IPricingFragment } from "@/gql/sdk";
import { PaletteBase, textColorClass } from "@/app/daisyui/util";
import clsx from "clsx";

interface ProductPriceProps {
  pricing: IPricingFragment | null | undefined;
  textColor?: PaletteBase | `${PaletteBase}${"-focus" | "-content"}`;
}

const CURRENCY_MAP = {
  USD: "$",
} as { [key: string]: string };

export const ProductPrice: FC<ProductPriceProps> = ({
  pricing,
  textColor = "",
}) => {
  const { price, discountPrice, currency } = useMemo(() => {
    const { displayGrossPrices, discount, priceRange } = pricing ?? {};

    const [price, discountPrice] = displayGrossPrices
      ? [priceRange?.start?.gross, discount?.gross]
      : [priceRange?.start?.net, discount?.net];

    return {
      price,
      discountPrice,
      currency: priceRange?.start?.currency ?? "",
    };
  }, [pricing]);

  const displayPrice = (discountPrice || price)?.amount?.toFixed(2);
  const cSymbol = useMemo(() => CURRENCY_MAP[currency] ?? "$", [currency]);

  if (!pricing) {
    return null;
  }

  return (
    <span className="inline-flex">
      <span className={clsx("font-bold", textColorClass(textColor))}>
        {cSymbol}
        {displayPrice}
      </span>
      {discountPrice ? (
        <span className={`text-accent line-through text-sm`}>
          {cSymbol}
          {price?.amount.toFixed(2)}
        </span>
      ) : null}
    </span>
  );
};
