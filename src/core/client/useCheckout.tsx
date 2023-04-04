'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

export interface CheckoutContextData {
	checkoutQuantity: number;
	updateCheckoutQuantity(value: number): void;
}

const CheckoutContext = createContext<CheckoutContextData>({
	checkoutQuantity: 0,
	updateCheckoutQuantity() {},
});

export const CheckoutProvider: FC<{
	children: ReactNode;
	initialQuantity: number;
}> = ({ children, initialQuantity }) => {
	const [checkoutQuantity, updateCheckoutQuantity] =
		useState(initialQuantity);
	return (
		<CheckoutContext.Provider
			value={{
				checkoutQuantity,
				updateCheckoutQuantity,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export const useCheckout = () => {
	return useContext(CheckoutContext);
};
