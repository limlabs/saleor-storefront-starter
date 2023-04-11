import gql from 'graphql-tag';
import { pageInfoProps } from './pageFragment';
import { Page, Product } from '@/app/types';

export interface QueryProducts {
	products: Page<Product>;
}

export const gqlProducts = gql`

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
					defaultVariant {
						id
					}
					pricing {
						onSale
						priceRange {
							start {
								gross {
									amount
									currency
								}
							}
						}
					}
				}
			}
		}
	}
`;
