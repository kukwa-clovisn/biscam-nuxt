import productModel from "../models/product";
export default defineEventHandler(async (event) => {
  const products = await productModel.find();
console.log('products', products )
  return products;
});
