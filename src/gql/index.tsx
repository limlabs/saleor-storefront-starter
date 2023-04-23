import { GraphQLClient } from "graphql-request";
import { gqlProducts } from "./query/products";
import { gqlProduct } from "./query/product";
import { gqlPage } from "./query/page";
import type { Variables } from "graphql-request";
import type { QueryProducts } from "./query/products";
import type { QueryProduct } from "./query/product";
import type { QueryPage } from "./query/page";

class StoreGqlClient {
  readonly client;

  constructor(url: string) {
    this.client = new GraphQLClient(url);
  }

  products(variables?: Variables) {
    return this.client.request<QueryProducts>(gqlProducts, variables);
  }

  product(variables?: Variables) {
    return this.client.request<QueryProduct>(gqlProduct, variables);
  }

  page(variables?: Variables){
    return this.client.request<QueryPage>(gqlPage, variables);
  }
}

export const gqlClient = new StoreGqlClient(
  "https://liminal-labs.saleor.cloud/graphql/"
);
