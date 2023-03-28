// import productModel from "../models/product";

export default defineEventHandler((event) => {
  const body = readBody(event);

  console.log(body);
  return body;
});
