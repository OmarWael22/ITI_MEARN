const { GraphQLObjectType } = require("graphql/type");
const productQueries = require("./product/product.query");
const userQueries = require("../graphql/user/user.query")
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...productQueries,
    ...userQueries,
  },
});

module.exports = RootQuery;
