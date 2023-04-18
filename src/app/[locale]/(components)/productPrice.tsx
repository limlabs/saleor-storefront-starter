import { FC, useMemo } from 'react';
import type { Money } from '@/app/types';

interface ProductPriceProps {
    currency: string;
    price: Money
    discountPrice?: Money | null;
}

const CURRENCY_MAP = {
    'USD': "$",
} as { [key: string]: string };

export const ProductPrice: FC<ProductPriceProps> = ({ price, discountPrice, currency })=>{
    const dispayPrice = (discountPrice || price)?.amount?.toFixed(2);
    const cSymbol = useMemo(()=> CURRENCY_MAP[currency] ?? "$" ,[currency]);
    
    return (
        <span className='inline-flex'>
            <span className="text-accent font-bold">{cSymbol}{dispayPrice}</span>
			{discountPrice?<span className="text-accent line-through text-xs">{cSymbol}{price.amount.toFixed(2)}</span>: null}
        </span>);

};