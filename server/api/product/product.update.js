import productModel from "../../models/product";
export default defineEventHandler(async (event) => {
  const products = await productModel.find();

  return products;
});
