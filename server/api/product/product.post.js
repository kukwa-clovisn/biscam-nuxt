import multer from "multer";
import * as fs from "fs";
const Storage = multer.diskStorage({
  destination: "../../uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// setting up the multer =====================================================>
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/svg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: fileFilter,
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log(body);

    await callNodeListener(
      upload.single("image"),
      event.node.req,
      event.node.res
    );

    let singleImg = await body;

    // converting the image into a base64 image
    let encoded_img = fs.readFileSync(singleImg.path);

    encoded_img = encoded_img.toString("base64");

    console.log(encoded_img);

    return {
      status: 200,
      message: "data received and under review",
      body: body,
    };
  } catch (error) {
    console.log(error);
  }
});
