'use client';

import { Product } from '@/app/types';
import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

export interface ProductCardContextData {
	productQuantity: number;
	updateProductQuantity: Dispatch<SetStateAction<number>>;
	product: Product;
	locale: string;
}

const ProductCardContext = createContext<ProductCardContextData>({
	productQuantity: 1,
	updateProductQuantity() {},
	product: {} as Product,
	locale: '',
});

export const ProductCardProvider: FC<{
	children: ReactNode;
	product: Product;
	locale: string;
}> = ({ children, product, locale }) => {
	const [productQuantity, updateProductQuantity] = useState(1);
	return (
		<ProductCardContext.Provider
			value={{ productQuantity, updateProductQuantity, product, locale }}
		>
			{children}
		</ProductCardContext.Provider>
	);
};

export const useProductCard = () => {
	return useContext(ProductCardContext);
};
