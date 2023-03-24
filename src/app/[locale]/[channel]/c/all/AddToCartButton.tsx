'use client';

import { FC } from 'react';

interface AddToCartButtonProps {
	text: string;
}

export const ProductCardButton: FC<AddToCartButtonProps> = ({ text }) => {
	const onClickHandler = () => console.log('heyyyy');
	return (
		<button className='btn btn-secondary' onClick={onClickHandler}>
			{text}
		</button>
	);
};
