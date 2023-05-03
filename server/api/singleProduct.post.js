import productModel from "../models/product";
export default defineEventHandler(async (event) => {
  const id = await readBody(event);

  console.log("id...", id);

  const data = productModel.find({ _id: id });

  return data;
});
