import productModel from "../models/product";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const { name } = await readBody(event);
  const { category } = await readBody(event);
  const { description } = await readBody(event);
  const { data } = await readBody(event);
  const { price } = await readBody(event);
  const { discountPrice } = await readBody(event);
  const { priceFrom } = await readBody(event);
  const { imgName } = await readBody(event);
  const { imgExt } = await readBody(event);

  const result = productModel.findByIdAndUpdate(id, {
    name: name,
    description: description,
       category: category,
       data: data,
       price: price,
       discountPrice: discountPrice,
       priceFrom: priceFrom,
       imgName: imgName,
    imgExt:imgExt
  });
  return result;
});
