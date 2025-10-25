const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Float!
        categoryId: Int!
    }

    input ProductInput {
        name: String!
        price: Float!
        categoryId: Int!
    }
    input ProductInputUpdate {
        name: String
        price: Float
        categoryId: Int
    }

    type RootQuery {
        getAllProducts: [Product!]!
        getProductById(id: ID!): Product
    }

    type RootMutation {
        addProduct(product: ProductInput!): Product!
        updateProduct(id: ID!, product: ProductInputUpdate!): Product!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
