import gql from "graphql-tag";
import { pageInfoProps } from "./pageFragment";

export interface QueryProducts {
  products: Page<Product>;
}

export const fragMoney = gql`
  fragment Money_props on Money {
    amount
  }
`;

export const fragTaxedMoney = gql`
  fragment TaxedMoney_props on TaxedMoney {
    currency
    gross {
      ...Money_props
    }
    net {
      ...Money_props
    }
    tax {
      ...Money_props
    }
  }
`;

export const gqlProducts = gql`
	${fragMoney}
	${fragTaxedMoney}
	
	query Products(
    $channel: String = "default-channel"
		$languageCode: LanguageCodeEnum = EN_US
		$thumbnailSize: Int = 300
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
					translation(languageCode: $languageCode) {
						name
						description
					}

					thumbnail(size: $thumbnailSize) {
						url
						alt
					}
                    rating
					category {
						id
						name
						translation(languageCode: $languageCode){
							name
						}
					}
					defaultVariant {
						id
					}
					variants {
						id
						name						
					}
					pricing {
						onSale
						discount {
							...TaxedMoney_props
						}
						displayGrossPrices
						priceRange {
							start {
								...TaxedMoney_props
							}
						}
					}
				}
			}
		}
	}
`;
