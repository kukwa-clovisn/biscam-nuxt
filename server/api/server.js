export default defineEventHandler(() => {
  return "server listening...";
});

// const config = useRuntimeConfig();

// const mailjetClient = mailjet.connect(
//   config.mail_api_key,
//   config.mail_secret_key
// );

// export default defineEventHandler((event) => {
//   const request = mailjetClient
//     .post("send", {
//       version: "v3.1",
//     })
//     .request({
//       Messages: [
//         {
//           From: {
//             Email: "kcn.123.com@gmail.com",
//             Name: "codingherald workflow",
//           },
//           To: [
//             {
//               Email: "codingherald@gmail.com",
//               Name: "biscam testing",
//             },
//           ],
//           Subject: "Advanced Tech Academy",
//           TextPart: "<h1>Password Reset</h1>",
//           HTMLPart: `<h1> Hello</h1> <p>You've made a request to reset your password</p> <p>this is your password reset token which expires after 60s(one minute) <br /> <p><a> </a></p>  <br /> Don't share the token with anyone or risk loosing your account. <br /> <a href="https://advancedtechacademy.herokuapp.com">advancedtechacademy.com</a>.</p>`,
//           CustomID: "AppGettingStartedTest",
//         },
//       ],
//     });

//   request
//     .then((result) => {
//       return res.status(200).json({
//         msg: "email sent successfully",
//       });
//     })
//     .catch((err) => {
//       return err.statusCode;
//     });
//   return {
//     api: {
//       name: "codingherald codes",
//       message: "working on website backend",
//     },
//   };
// });
