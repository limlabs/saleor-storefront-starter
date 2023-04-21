import gql from "graphql-tag";

export const gqlCollections = gql`
  query Collections($channel: String = "default-channel", $first: Int!) {
    collections(channel: $channel, first: $first) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
