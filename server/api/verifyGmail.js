import verifyEmailTemplate from "./verifyEmailTemplate";
import { sendGmail } from "./sendMail";

export default async function sendVerificationGmail(email) {
  const template = verifyEmailTemplate(
    "codingherad-otp",
    "biscam sarl integraton",
    "codingherald Support",
    "integrationg Nuxt Mailer"
  );
  return await sendGmail({
    template,
    to: email,
    from: "Kukwa Clovis",
    subject: "codingherald email verification",
  });
}
