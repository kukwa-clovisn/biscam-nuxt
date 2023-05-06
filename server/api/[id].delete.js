import productModel from "../models/product";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const result = await productModel.findByIdAndDelete(id);
  return result;
});
