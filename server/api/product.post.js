// import * as fs from "fs";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("body", body);
  console.log

  // let singleImg = await body;

  // converting the image into a base64 image
  // let encoded_img = fs.readFileSync(singleImg.path);

  // encoded_img = encoded_img.toString("base64");

  // console.log(encoded_img);

  return {
    status: 200,
    message: "data received and under review",
    body: body,
  };
});
