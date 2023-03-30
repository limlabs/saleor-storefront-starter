'use client';

import { checkoutStorageKey } from '@/core/constants';
import request from 'graphql-request';
import gql from 'graphql-tag';
import { FC } from 'react';
import { useCheckoutQuantity } from '@/core/client/useCheckoutQuantity';

interface AddToCartButtonProps {
	text: string;
	variantID: string;
}

interface CheckoutCreateResponse {
	checkoutCreate: {
		errors: string[];
		checkout: {
			id: string;
			quantity: number;
		};
	};
}

interface CheckoutAddLineResponse {
	checkoutLinesAdd: {
		checkout: {
			lines: {
				id: string;
				variant: {
					name: string;
				};
				quantity: number;
			}[];
			quantity: number;
		};
		totalPrice: {
			gross: {
				currency: string;
				amount: number;
			};
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
		quantity
	  }
	}
  }
`;

const checkoutAddLineQueryFn = (checkoutID: string, variantID: string) => `
mutation {
	checkoutLinesAdd(
	id: "${checkoutID}"
	lines: [{ variantId: "${variantID}", quantity: 1 }]
  ) {
	  checkout {
		lines {
		  id
		  variant {
			name
		  }
		  quantity
		}
		totalPrice {
		  gross {
			currency
			amount
		  }
		}
		quantity
	  }
	}
  }`;

const getCookie = (name: string) => {
	const cookieInitial = name + '=';
	const cookieSearch = document.cookie
		.split('; ')
		.filter(
			(cookie) =>
				cookie.substring(0, cookieInitial.length) === cookieInitial
		);
	if (cookieSearch.length === 0) return '';
	else
		return cookieSearch[0].substring(
			cookieInitial.length,
			cookieSearch[0].length
		);
};

export const ProductCardButton: FC<AddToCartButtonProps> = ({
	text,
	variantID,
}) => {
	const { updateCheckoutQuantity } = useCheckoutQuantity();

	const onClickHandler = async () => {
		const cookieCheckoutID = getCookie('CheckoutID');

		if (cookieCheckoutID) {
			const checkoutAddLineQuery = gql(
				checkoutAddLineQueryFn(cookieCheckoutID, variantID)
			);
			const resp = await request<CheckoutAddLineResponse>(
				'https://liminal-labs.saleor.cloud/graphql/',
				checkoutAddLineQuery
			);
			updateCheckoutQuantity(resp.checkoutLinesAdd.checkout.quantity);
			console.log(
				`New item added to checkout ${resp.checkoutLinesAdd.checkout.lines[0].id}.`
			);
		} else {
			const checkoutCreateQuery = gql(checkoutCreateQueryFn(variantID));
			const resp = await request<CheckoutCreateResponse>(
				'https://liminal-labs.saleor.cloud/graphql/',
				checkoutCreateQuery
			);
			document.cookie = [
				`${checkoutStorageKey}=${resp.checkoutCreate.checkout.id}`,
				'path=/',
				`expires=Fri, 31 Dec 9999 23:59:59 GMT`,
			].join('; ');
			updateCheckoutQuantity(resp.checkoutCreate.checkout.quantity);
			console.log(
				`New checkout created with ID ${resp.checkoutCreate.checkout.id}`
			);
		}
	};

	return (
		<button className='btn btn-secondary' onClick={onClickHandler}>
			{text}
		</button>
	);
};
