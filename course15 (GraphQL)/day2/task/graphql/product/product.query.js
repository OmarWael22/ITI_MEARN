const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const { ProductType, ProductsFilterInput } = require("./product.type");
const Product = require("../../model/Product");
const { Types } = require("mongoose");

const getAllProducts = {
  type: new GraphQLList(ProductType),
  args: {
    filter: { type: ProductsFilterInput },
  },
  resolve: async (_, { filter }, { req }) => {
    if (!req.user) {
      const error = new Error("Not authenticated");
      error.code = 401;
      throw error;
    }

    const query = { createdBy: req.user.userId };

    if (filter) {
      if (filter.name) query.name = filter.name;
      if (filter.minPrice)
        query.price = { ...query.price, $gte: filter.minPrice };
      if (filter.maxPrice)
        query.price = { ...query.price, $lte: filter.maxPrice };
      if (filter.categoryId) query.categoryId = filter.categoryId;
    }

    const products = await Product.find(query);
    return products;
  },
};

const getProductById = {
  type: ProductType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { id }, { req }) => {
    if (!req.user) {
      const error = new Error("Not authenticated");
      error.code = 401;
      throw error;
    }

    if (!Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid product ID");
      error.code = 400;
      throw error;
    }

    const product = await Product.findById(id);
    if (!product) {
      const error = new Error("Product not found");
      error.code = 404;
      throw error;
    }
    // add authorization
    if (product.createdBy.toString() !== req.user.userId) {
      const error = new Error("Not authorized to view this product");
      error.code = 403;
      throw error;
    }
    return product;
  },
};

module.exports = {
  getAllProducts,
  getProductById,
};
