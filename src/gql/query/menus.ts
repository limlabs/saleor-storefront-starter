import gql from 'graphql-tag';

const fragMenuItemProps = gql`
fragment MenuItem_props on MenuItem {
    level
    category {
        id
        name
    }
}`;

export const gqlMenus = gql`
query Menu($channel: String = "default-channel") {
menus (channel: $channel, first: 10){
    edges {
        node {
            id
            name
            slug
            items {
                ...MenuItem_props
                children {
                    ...MenuItem_props
                    children {
                        ...MenuItem_props
                    }                           
                }
            }
        }
    }
}
}
${fragMenuItemProps}`;