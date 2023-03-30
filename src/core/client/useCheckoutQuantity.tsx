'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

export interface CheckoutQuantityContextData {
	checkoutQuantity: number;
	updateCheckoutQuantity(value: number): void;
}

const CheckoutQuantityContext = createContext<CheckoutQuantityContextData>({
	checkoutQuantity: 0,
	updateCheckoutQuantity() {},
});

export const CheckoutQuantityProvider: FC<{
	children: ReactNode;
	initialQuantity: number;
}> = ({ children, initialQuantity }) => {
	const [checkoutQuantity, updateCheckoutQuantity] =
		useState(initialQuantity);
	return (
		<CheckoutQuantityContext.Provider
			value={{
				checkoutQuantity,
				updateCheckoutQuantity,
			}}
		>
			{children}
		</CheckoutQuantityContext.Provider>
	);
};

export const useCheckoutQuantity = () => {
	return useContext(CheckoutQuantityContext);
};
