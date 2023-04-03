import gql from "graphql-tag";

export interface QueryProducts {
    products: ProductList
};

export const gqlProducts = gql`
	query Products(
        $channel: String = "default-channel"
		$first: Int
		$last: Int
		$after: String
		$before: String
	) {
		products(
			channel: $channel
			first: $first
			last: $last
			after: $after
			before: $before
		) {
			pageInfo {
				endCursor
				startCursor
				hasNextPage
				hasPreviousPage
			}
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