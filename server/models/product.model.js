import mongoose from "mongoose";
// import bcrypt from "mongoose-bcrypt";

// schema.plugin(bcrypt);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: String,
    qualities: String,
    price: String,
    discountPrice: String,
    priceFrom: String,
    priceTo: String,
    imageurl: String,
    imgName: String,
    imgExt: String,
  },
  {
    collection: "product",
  },
  { timestamps: true, strict: true, strictQuery: true }
);
export const productModel = mongoose.model("productSchema", productSchema);
