import { GraphQLClient } from "graphql-request";
import { gqlProducts } from "./query/products";
import type { Variables } from "graphql-request";
import type { QueryProducts } from "./query/products";

class StoreGqlClient{
    
    readonly client;

    constructor(url : string){
        this.client= new GraphQLClient(url);
    } 

    products(variables?: Variables){
        return this.client.request<QueryProducts>(gqlProducts, variables);
    }
}

export const gqlClient = new StoreGqlClient("https://liminal-labs.saleor.cloud/graphql/");