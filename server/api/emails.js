import sendVerificationGmail from "./verifyGmail";

export default defineEventHandler(async (event) => {
  try {
    console.log(event);
    return await sendVerificationGmail("codingherald@gmail.com");
  } catch (error) {
    return sendError(event, createError(error));
  }
});
