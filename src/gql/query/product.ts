import gql from "graphql-tag";
import { fragTaxedMoney, fragMoney } from "./products";

export interface QueryProduct {
  product: ProductDetails;
}

export const gqlProduct = gql`
  query Product($channel: String = "default-channel", $slug: String!) {
    product(channel: $channel, slug: $slug) {
      id
      seoTitle
      name
      description
      slug

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
        name
        weight {
          unit
          value
        }
        media {
          url
        }
      }
    }
  }
  ${fragTaxedMoney}
  ${fragMoney}
  `;
