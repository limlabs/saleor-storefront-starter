import { CheckoutIDProvider } from '@/core/client/useCheckout';
import { getCheckoutID } from '@/core/server/checkout';
import { FC, ReactNode } from 'react';
import { RootLayoutHeader } from './header';

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
	const checkoutID = getCheckoutID();
	return (
		<CheckoutIDProvider initialCheckoutID={checkoutID}>
			<div className='mx-auto my-6 w-full max-w-6xl '>
				<RootLayoutHeader />
				{children}
			</div>
		</CheckoutIDProvider>
	);
};
