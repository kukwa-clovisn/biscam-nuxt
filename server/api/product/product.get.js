import productModel from "./product"
export default defineEventHandler(async (event) => {
    const products = await productModel.find();
  
    return products;
  });