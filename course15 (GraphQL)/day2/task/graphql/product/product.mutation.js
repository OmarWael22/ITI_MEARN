const { GraphQLNonNull, GraphQLString, GraphQLInt } = require("graphql");
const {
  ProductType,
  CreateProductDto,
  UpdateProductDto,
} = require("./product.type");
const Product = require("../../model/Product");
const { Types } = require("mongoose");

const createProduct = {
  type: ProductType,
  args: {
    input: { type: new GraphQLNonNull(CreateProductDto) },
  },
  resolve: async (_, { input }, { req }) => {
    if (!req.user) {
      const error = new Error("Not authenticated");
      error.code = 401;
      throw error;
    }

    const product = new Product({
      ...input,
      createdBy: req.user.userId, 
    });

    await product.save();
    return product;
  },
};

const updateProduct = {
  type: ProductType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    updateParams: { type: new GraphQLNonNull(UpdateProductDto) },
  },
  resolve: async (_, { id, updateParams }, { req }) => {
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

    if (product.createdBy.toString() !== req.user.userId) {
      const error = new Error("Not authorized to update this product");
      error.code = 403;
      throw error;
    }

    const { name, price, categoryId } = updateParams;
    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (categoryId !== undefined) product.categoryId = categoryId;

    await product.save();
    return product;
  },
};



module.exports = {
  createProduct,
  updateProduct,
};
