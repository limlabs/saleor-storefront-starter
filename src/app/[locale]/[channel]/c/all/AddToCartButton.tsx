'use client';

import request from 'graphql-request';
import gql from 'graphql-tag';
import { FC } from 'react';

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

export const ProductCardButton: FC<AddToCartButtonProps> = ({
	text,
	variantID,
}) => {
	const checkoutCreateQuery = gql`
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
	  }`;

	const onClickHandler = async () => {
		const resp = await request<CheckoutCreateResponse>(
			'https://liminal-labs.saleor.cloud/graphql/',
			checkoutCreateQuery
		);
		console.log(resp.checkoutCreate.checkout.id);
	};

	return (
		<button className='btn btn-secondary' onClick={onClickHandler}>
			{text}
		</button>
	);
};
