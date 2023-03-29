import { CheckoutIDProvider } from '@/core/client/useCheckout';
import { getCheckoutID } from '@/core/server/checkout';
import { FC, ReactNode } from 'react';
import { RootLayoutHeader } from './header';
import { ThemePicker } from './theme';

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
	const checkoutID = getCheckoutID();
	return (
		<div className='mx-auto my-6 w-full max-w-6xl '>
			<CheckoutIDProvider initialCheckoutID={checkoutID}>
				<RootLayoutHeader />
				{children}
				<ThemePicker />
			</CheckoutIDProvider>
		</div>
	);
};
