const { GraphQLObjectType } = require("graphql/type");
const productMutations = require("./product/product.mutation");
const userMutations = require("./user/user.mutation");

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    ...productMutations,
    ...userMutations,
  },
});

module.exports = RootMutation;
