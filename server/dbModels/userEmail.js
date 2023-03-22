import mongoose from "mongoose";
// import bcrypt from "mongoose-bcrypt";

// schema.plugin(bcrypt);

const emailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "emails",
  },
  { timestamps: true, strict: true, strictQuery: true }
);
const emailModel = mongoose.model("emailSchema", emailSchema);

export default emailModel;
