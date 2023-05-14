import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

const saleorClient = new GraphQLClient(process.env.SALEOR_ENDPOINT as string);

export const gqlClient = getSdk(saleorClient);

