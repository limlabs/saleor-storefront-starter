import gql from "graphql-tag";
import { fragTaxedMoney, fragMoney } from "./products";

export interface QueryProduct {
  product: ProductDetails;
}

export const gqlProduct = gql`
  query Product(
    $channel: String = "default-channel"
    $slug: String!
    $languageCode: LanguageCodeEnum = EN_US
  ) {
    product(channel: $channel, slug: $slug) {
      id
      seoTitle
      name
      description
      slug
      rating
      isAvailable

      translation(languageCode: $languageCode) {
        name
        description
      }

      thumbnail(size: 1200) {
        alt
        url
      }
      productType {
        name
        slug
      }
      weight {
        unit
        value
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
      variants {
        id
        name
        weight {
          unit
          value
        }
        media {
          url
          alt
          type
        }
      }
    }
  }
  ${fragTaxedMoney}
  ${fragMoney}
  `;
