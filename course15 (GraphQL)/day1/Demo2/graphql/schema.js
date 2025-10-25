const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require("graphql");

const ProductsData = require("../data");

// Define Product type
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categoryId: { type: GraphQLInt },
  }),
});

// Define Input types
const ProductInputType = new GraphQLInputObjectType({
  name: "ProductInput",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

const ProductInputUpdateType = new GraphQLInputObjectType({
  name: "ProductInputUpdate",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categoryId: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProducts: {
      type: new GraphQLList(ProductType),
      resolve() {
        return ProductsData;
      },
    },
    getProductById: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ProductsData.find((p) => p.id == args.id);
      },
    },
  },
});

// Root Mutation
const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        product: { type: new GraphQLNonNull(ProductInputType) },
      },
      resolve(parent, { product }) {
        const newProduct = {
          id:
            ProductsData.length > 0
              ? ProductsData[ProductsData.length - 1].id + 1
              : 1,
          ...product,
        };
        ProductsData.push(newProduct);
        return newProduct;
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        product: { type: new GraphQLNonNull(ProductInputUpdateType) },
      },
      resolve(parent, { id, product }) {
        const index = ProductsData.findIndex((p) => p.id == id);
        if (index === -1) {
          throw new Error(`Product with id ${id} not found`);
        }

        const updated = { ...ProductsData[index], ...product };
        ProductsData[index] = updated;
        return updated;
      },
    },
  },
});

// Export schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
