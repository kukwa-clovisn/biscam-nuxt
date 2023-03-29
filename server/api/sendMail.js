// import { EmailTemplate } from "./types/emailTypes";
import { useMailer } from "#mailer";

const SendMail = {
  template: "",
  to: "",
  from: "",
  subject: "",
};

export async function sendGmail(request) {
  const mailService = useMailer();

  const gmailTransporter = mailService.gmailTransporter();

  return await mailService.sendMail({
    requestId: "test-key",
    options: {
      to: request.to,
      subject: request.subject,
      text: request.template.text,
      html: request.template.html,
    },
    transporter: gmailTransporter,
  });
}
