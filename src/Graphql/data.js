import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

// url'http://localhost:4000/graphql',
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

export const GET_PRODUCTS = gql`
    query {
        category {
            products {
                id
                name
                inStock
                category
                brand
                gallery
                description
                attributes {
                    name
                    type
                    items {
                        value
                    }
                }
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`

export default client;