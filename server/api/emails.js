import sendVerificationGmail from "./verifyGmail";

export default defineEventHandler(async (event) => {
  try {
    return await sendVerificationGmail("kcn.123.comd@gmail.com");
  } catch (error) {
    return sendError(event, createError(error));
  }
});
