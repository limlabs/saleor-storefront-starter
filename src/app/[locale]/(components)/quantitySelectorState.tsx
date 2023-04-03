'use client';

import { Product } from '@/app/types';
import { FC, useState } from 'react';
import { ProductCard } from './productCard';

interface QuantitySelectorStateProps {
	product: Product;
	locale: string;
}

export const QuantitySelectorState: FC<QuantitySelectorStateProps> = ({
	product,
	locale,
}) => {
	const [quantity, updateQuantity] = useState<number>(1);

	return (
		<ProductCard
			product={product}
			locale={locale}
			quantity={quantity}
			updateQuantity={updateQuantity}
		/>
	);
};
