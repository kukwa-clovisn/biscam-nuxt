import sendVerificationGmail from "./verifyGmail";

export default defineEventHandler(async (event) => {
  try {
    return await sendVerificationGmail("codingherald@gmail.com");
  } catch (error) {
    return sendError(event, createError(error));
  }
});
