import productModel from "../../models/product";

export default defineEventHandler(async (event) => {
  const { category } = event.context.params;
  let products = [];
  if (category === "all") {
    products = await productModel.find({});
  } else {
    products = await productModel.find({ category: category });
  }

  return products;
});
