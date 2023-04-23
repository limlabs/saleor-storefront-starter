import { FC, useMemo } from "react";

interface ProductPriceProps {
  pricing: Pricing;
}

const CURRENCY_MAP = {
  USD: "$",
} as { [key: string]: string };

export const ProductPrice: FC<ProductPriceProps> = ({
  pricing,
}) => {
    const {price, discountPrice, currency} = useMemo(()=>{
   
    const { displayGrossPrices, discount, priceRange }= pricing;

    const [ price, discountPrice ] = displayGrossPrices ? 
      [ priceRange.start.gross, discount?.gross ]: 
      [ priceRange.start.net, discount?.net ];

    return { 
      price, 
      discountPrice, 
      currency: priceRange.start.currency 
    };
  }, [pricing]);

  

  const displayPrice = (discountPrice || price)?.amount?.toFixed(2);
  const cSymbol = useMemo(() => CURRENCY_MAP[currency] ?? "$", [currency]);

  return (
    <span className="inline-flex">
      <span className="text-neutral font-bold">
        {cSymbol}
        {displayPrice}
      </span>
      {discountPrice ? (
        <span className="text-accent line-through text-xs">
          {cSymbol}
          {price.amount.toFixed(2)}
        </span>
      ) : null}
    </span>
  );
};
