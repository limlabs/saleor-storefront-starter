import gql from "graphql-tag";

export interface QueryPage {
    page: {
        title: string;
        content: JSONString;
    }
}

export const gqlPage = gql`
query Page($slug: String!) {
    page(slug: $slug){
        title
        content
    }
}`;