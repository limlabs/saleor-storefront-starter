import gql from "graphql-tag";
import { Page, ProductDetails } from "@/app/types";

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
`;
