import mongoose from "mongoose";
const config = useRuntimeConfig();
export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Biscam investment Sarl Database connected successfully...");
  } catch (err) {
    console.error("Biscam investment Sarl Database connection failed.", err);
  }
};
