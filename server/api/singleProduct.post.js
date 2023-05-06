import productModel from "../models/product";
export default defineEventHandler(async (event) => {
  const req = await readBody(event);

  const data = await productModel.findById(req.id);

  return data;
});
