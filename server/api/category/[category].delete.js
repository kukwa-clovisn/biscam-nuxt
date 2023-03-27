import * as Mailjet from "node-mailjet";
export default defineEventHandler(async (event) => {
  console.log(event.context.params.category);
  const body = await categoryModel.find();
  const config = useRuntimeConfig();

  const mailjet = Mailjet.apiConnect(
    config.mail_api_key,
    config.mail_secret_key
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "codingherald.com",
          Name: "codingherald",
        },
        To: [
          {
            Email: "kcn.123.com@gmail.com",
            Name: "kukwa clovis",
          },
        ],
        Subject: "Your email flight plan!",
        TextPart:
          "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        HTMLPart: `<h3>Dear passenger 1, welcome to <a href="http://localhost:3000">biscam dev</a>!</h3><br />May the delivery force be with you! <br /> ${body}`,
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    msg: "working on mailjet api",
    head: event.context.params.category,
    body: body,
  };
});
