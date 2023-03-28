'use client';

import { checkoutStorageKey } from '@/core/constants';
import { useCheckout } from '@/core/useCheckout';
import request from 'graphql-request';
import gql from 'graphql-tag';
import { FC, useEffect } from 'react';

interface AddToCartButtonProps {
	text: string;
	variantID: string;
}

interface CheckoutCreateResponse {
	checkoutCreate: {
		errors: string[];
		checkout: {
			id: string;
		};
	};
}

const checkoutCreateQueryFn = (variantID: string) => `
mutation {
	checkoutCreate(input: {
	  channel: "default-channel"
	  lines:[
		{ variantId: "${variantID}", quantity: 1 }
	  ]
	}) {
	  errors {
		message
	  }
	  checkout {
		id
	  }
	}
  }
`;

export const ProductCardButton: FC<AddToCartButtonProps> = ({
	text,
	variantID,
}) => {
	const { checkoutID, updateCheckoutID } = useCheckout();

	const checkoutCreateQuery = gql(checkoutCreateQueryFn(variantID));

	const onClickHandler = async () => {
		if (checkoutID !== '') console.log('checkout already created');
		else {
			const resp = await request<CheckoutCreateResponse>(
				'https://liminal-labs.saleor.cloud/graphql/',
				checkoutCreateQuery
			);
			document.cookie = [
				`${checkoutStorageKey}=${resp.checkoutCreate.checkout.id}`,
				'path=/',
				`expires=Fri, 31 Dec 9999 23:59:59 GMT`,
			].join('; ');
			updateCheckoutID(resp.checkoutCreate.checkout.id);
		}
	};

	return (
		<button className='btn btn-secondary' onClick={onClickHandler}>
			{text}
		</button>
	);
};
