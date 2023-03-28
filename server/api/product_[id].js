import productModel from "../models/product";

export default defineEventHandler((event) => {
  const queryId = event.context.params.product_id;

  const productId = queryId.split("_");

  const product = productModel.findById(productId);

  console.log(productId);
  return product;
});
