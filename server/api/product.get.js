import productModel from "../models/product.js";

export default defineEventHandler(() => {
  const products = productModel.find({});

  return products;
});
