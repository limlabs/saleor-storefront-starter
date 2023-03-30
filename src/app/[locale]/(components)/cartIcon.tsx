'use client';

import { useCheckoutQuantity } from '@/core/client/useCheckoutQuantity';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

export const CartIcon: FC = () => {
	const { checkoutQuantity } = useCheckoutQuantity();
	return (
		<>
			<ShoppingCartIcon className='ml-4 w-6 h-6' />
			<div>{checkoutQuantity}</div>
		</>
	);
};
