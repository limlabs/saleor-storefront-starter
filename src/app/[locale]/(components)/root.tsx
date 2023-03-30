import { CheckoutQuantityProvider } from '@/core/client/useCheckoutQuantity';
import { getCheckoutID } from '@/core/server/checkout';
import request from 'graphql-request';
import { FC, ReactNode, use } from 'react';
import { RootLayoutHeader } from './header';

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
	const checkoutID = getCheckoutID();

	interface checkoutQuantityResponse {
		checkout: {
			quantity: number;
		};
	}

	const checkoutQuantityQuery = `
  query {
  checkout(id: "${checkoutID}") {
    quantity
  }
  }
  `;

	const checkoutQuantityFn = (checkoutID: string): number => {
		if (checkoutID !== '') {
			const resp = use(
				request<checkoutQuantityResponse>(
					'https://liminal-labs.saleor.cloud/graphql/',
					checkoutQuantityQuery
				)
			);
			return resp.checkout?.quantity;
		} else return 0;
	};

	return (
		<CheckoutQuantityProvider
			initialQuantity={checkoutQuantityFn(checkoutID)}
		>
			<div className='mx-auto my-6 w-full max-w-6xl '>
				<RootLayoutHeader />
				{children}
			</div>
		</CheckoutQuantityProvider>
	);
};
