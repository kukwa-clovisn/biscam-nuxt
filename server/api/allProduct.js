import productModel from "../models/product";
export default defineEventHandler((event) => {
  const products = productModel.find();
  return products;
});
