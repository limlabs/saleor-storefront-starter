import { GraphQLClient } from "graphql-request";
import { gqlProducts } from "./query/products";
import type { Variables } from "graphql-request";
import type { QueryProducts } from "./query/products";

class StoreGqlClient{
    client = new GraphQLClient("https://liminal-labs.saleor.cloud/graphql/");

    products(variables?: Variables){
        return this.client.request<QueryProducts>(gqlProducts, variables)
    }
}


export const gqlClient = new StoreGqlClient();