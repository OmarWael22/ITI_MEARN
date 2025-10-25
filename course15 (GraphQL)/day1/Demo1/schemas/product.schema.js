const Joi = require("joi");

const productSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().required().description("Product name"),
  price: Joi.number()
    .precision(2)
    .positive()
    .required()
    .description("Product price"),

  categoryId: Joi.number()
    .integer()
    .min(0)
    .required()
    .description("Category ID"),
});

module.exports = productSchema;
