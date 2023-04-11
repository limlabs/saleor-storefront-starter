'use client';

import { useProductCard } from '@/core/client/useProductCard';
import { FC } from 'react';

export const QuantitySelector: FC = () => {
	const { productQuantity, updateProductQuantity } = useProductCard();
	const plusHandler = () => {
		updateProductQuantity(productQuantity + 1);
	};

	const minusHandler = () => {
		if (productQuantity > 1) updateProductQuantity(productQuantity - 1);
	};

	return (
		<div className='flex flex-row'>
			<button
				className='btn btn-xs btn-outline btn-secondary'
				onClick={minusHandler}
			>
				-
			</button>
			<span className='px-2'>{productQuantity}</span>
			<button
				className='btn btn-xs btn-outline btn-secondary'
				onClick={plusHandler}
			>
				+
			</button>
		</div>
	);
};
