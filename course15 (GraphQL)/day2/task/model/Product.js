const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    categoryId: {
      type: String,
      required: [true, "Category is required"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "CreatedBy (User ID) is required"],
    },
  },
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
