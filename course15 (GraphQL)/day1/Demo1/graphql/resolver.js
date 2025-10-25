const productSchema = require("../schemas/product.schema");
const ProductsData = require("../data");


module.exports = {
  getAllProducts() {
    return ProductsData;
  },

  getProductById({ id }) {
    const product = ProductsData.find((prod) => prod.id == id);
    if (!product) {
      const error = new Error(`Product with id ${id} not found`);
      error.code = 404;
      throw error;
    }
    return product;
  },

  async addProduct({ product }) {
    const { error, value } = productSchema.validate(product);
    if (error) {
      const customError = new Error("Error validating the product schema");
      customError.code = 400;
      customError.data = error.details;
      throw customError;
    }

    const newProduct = {
      id:
        ProductsData.length > 0
          ? ProductsData[ProductsData.length - 1].id + 1
          : 1,
      ...value,
    };

    ProductsData.push(newProduct);
    return newProduct;
  },

  async updateProduct({ id, product }) {
    const index = ProductsData.findIndex((p) => p.id == id);
    if (index === -1) {
      const error = new Error(`Product with id ${id} not found`);
      error.code = 404;
      throw error;
    }

    const updatedProduct = { ...ProductsData[index], ...product };
    const { error, value } = productSchema.validate(updatedProduct);
    if (error) {
      const customError = new Error("Error validating the update product schema");
      customError.code = 400;
      customError.data = error.details;
      throw customError;
    }  
    ProductsData[index] = updatedProduct;
    return updatedProduct;
  },
};
