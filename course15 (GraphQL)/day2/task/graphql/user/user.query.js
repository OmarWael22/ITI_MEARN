const { GraphQLNonNull, GraphQLString } = require("graphql/type");
const User = require("../../model/user");
const { UserType } = require("./user.type")
const getUserById = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { id }, { req }) => {
    if (!req.user) {
      const error = new Error("Not authenticated");
      error.code = 401;
      throw error;
    }

    if (req.user.userId !== id) {
      const error = new Error("Not authorized to view this user");
      error.code = 403;
      throw error;
    }

    const user = await User.findById(id);
    if (!user) {
      const error = new Error("User not found");
      error.code = 404;
      throw error;
    }

    return user;
  },
};

module.exports = {
  getUserById,
};
