import gql from 'graphql-tag';
import { pageInfoProps } from './pageFragment';
import { Page, Product } from '@/app/types';

export interface QueryProducts {
	products: Page<Product>;
}

const fragMoney = gql`
fragment Money_props on Money {
	currency
	amount
}`;

const fragTaxedMoney = gql`
fragment TaxedMoney_props on TaxedMoney {
	currency
	gross{
		...Money_props
	}
	net{
		...Money_props
	}
	tax{
		...Money_props
	}
}`;

const fragVariantPricingInfo = gql`
fragment VariantPricingInfo_props on VariantPricingInfo {
	onSale
	discount {
		...TaxedMoney_props
	}
	price {
		...TaxedMoney_props
	}
	priceUndiscounted {
		...TaxedMoney_props
	}
}`;

export const gqlProducts = gql`
	${fragMoney}
	${fragTaxedMoney}
	${fragVariantPricingInfo}
	query Products(
        $channel: String = "default-channel"
		$first: Int
		$last: Int
		$after: String
		$before: String
		$filter: ProductFilterInput
	) {
		products(
			channel: $channel
			first: $first
			last: $last
			after: $after
			before: $before
			filter: $filter
		) {
			${pageInfoProps}
			edges {
				node {
					id
					slug
					name
					thumbnail(size: 300) {
						url
						alt
					}
                    rating
					category {
						id
						name
					}
					defaultVariant {
						id
					}
					variants {
						id
						name
						pricing {
							...VariantPricingInfo_props
						}
					}
					pricing {
						onSale
						priceRange {
							start {
								gross {
									...Money_props
								}
							}
						}
					}
				}
			}
		}
	}
`;
