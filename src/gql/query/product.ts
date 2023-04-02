import gql from "graphql-tag";

export const gqlProduct = gql`
query Product($channel: String = "default-channel", $id: !String){
product(channel: $channel, id: $id ){
    id
    seoTitle
    name
    description
    slug
    thumbnail {
        alt
        url
    }
    productType {
        name
        slug
    }
    weight{
        unit
        value
    }
    variants{
        name
        weight{
            unit
            value
        }
        media {
            url
        }
    }
}
}`;