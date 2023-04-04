'use client';

import { Dispatch, FC, SetStateAction } from 'react';

interface QuantitySelectorProps {
	quantity: number;
	updateQuantity: Dispatch<SetStateAction<number>>;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({
	quantity,
	updateQuantity,
}) => {
	const plusHandler = () => {
		updateQuantity(quantity + 1);
	};

	const minusHandler = () => {
		if (quantity > 1) updateQuantity(quantity - 1);
	};

	return (
		<div className='flex flex-row'>
			<button
				className='btn btn-xs btn-outline btn-secondary'
				onClick={minusHandler}
			>
				-
			</button>
			<span className='px-2'>{quantity}</span>
			<button
				className='btn btn-xs btn-outline btn-secondary'
				onClick={plusHandler}
			>
				+
			</button>
		</div>
	);
};
