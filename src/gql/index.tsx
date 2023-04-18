
import { GraphQLClient } from "graphql-request";
import { gqlProducts } from "./query/products";
import { gqlProduct } from "./query/product";
import type { Variables } from "graphql-request";
import type { QueryProducts } from "./query/products";
import type { QueryProduct } from "./query/product";


class StoreGqlClient{
    
    readonly client;

    constructor(url : string){
        this.client= new GraphQLClient(url);
    } 

    products(variables?: Variables){
        return this.client.request<QueryProducts>(gqlProducts, variables);
    }

    product(variables?: Variables){
        return this.client.request<QueryProduct>(gqlProduct, variables);
    }
}

export const gqlClient = new StoreGqlClient("https://liminal-labs.saleor.cloud/graphql/");