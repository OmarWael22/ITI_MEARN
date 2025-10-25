const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require("graphql");
const { UserType } = require("../user/user.type");

const ProductsFilterInput = new GraphQLInputObjectType({
  name: "ProductsFilterInput",
  fields: () => ({
    name: { type: GraphQLString },
    minPrice: { type: GraphQLInt },
    maxPrice: { type: GraphQLInt },
    categoryId: { type: GraphQLString },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    categoryId: { type: new GraphQLNonNull(GraphQLString) },
    createdBy: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const CreateProductDto = new GraphQLInputObjectType({
  name: "CreateProductDto",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    categoryId: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const UpdateProductDto = new GraphQLInputObjectType({
  name: "UpdateProductDto",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    categoryId: { type: GraphQLString },
  }),
});

module.exports = {
  ProductsFilterInput,
  ProductType,
  CreateProductDto,
  UpdateProductDto,
};
