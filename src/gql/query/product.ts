import gql from 'graphql-tag';

export const gqlProduct = gql`
query Product($channel: String = "default-channel", $slug: String!){
product(channel: $channel, slug: $slug ){
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