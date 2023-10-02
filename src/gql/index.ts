import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

const defaultSaleorClient = new GraphQLClient(
  process.env.SALEOR_ENDPOINT as string,
);

export const gqlClient = getSdk(defaultSaleorClient);

const uncachedSaleorClient = new GraphQLClient(
  process.env.SALEOR_ENDPOINT as string,
  {
    cache: "no-store",
  },
);

export const uncachedGqlClient = getSdk(uncachedSaleorClient);
