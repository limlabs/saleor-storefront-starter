'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

export interface CheckoutIDContextData {
	checkoutID: string;
	updateCheckoutID(value: string): void;
}

const CheckoutIDContext = createContext<CheckoutIDContextData>({
	checkoutID: '',
	updateCheckoutID() {},
});

export const CheckoutIDProvider: FC<{
	children: ReactNode;
	initialCheckoutID: string;
}> = ({ children, initialCheckoutID }) => {
	const [checkoutID, updateCheckoutID] = useState(initialCheckoutID);
	console.log('initialCheckoutID', initialCheckoutID);
	return (
		<CheckoutIDContext.Provider
			value={{
				checkoutID,
				updateCheckoutID,
			}}
		>
			{children}
		</CheckoutIDContext.Provider>
	);
};

export const useCheckout = () => {
	return useContext(CheckoutIDContext);
};
