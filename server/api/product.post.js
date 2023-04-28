import productModel from "../models/product.js";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const product = {
      name: body.name,
      type: body.type,
      data: body.base64String.toString("base64"),
      category: body.category,
      description: body.description,
      price: body.price,
      discountPrice: body.discountPrice,
      priceFrom: body.priceFrom,
      priceTo: body.priceTo,
      imgName: body.imgName,
    };

    await productModel.create(product);

    return product;
  } catch (err) {
    console.log(err);

    return {
      res: "error not uploaded",
    };
  }
});
