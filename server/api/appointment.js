import mailjet from "../mailjet";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const response = {
    success: false,
    data: null,
  };

  await mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "codingherald@gmail.com",
            Name: "Biscam Investment Sarl",
          },
          To: [
            {
              Email: data.email,
              Name: data.name,
            },
          ],
          Subject: "Appointment || Biscam Investment Sarl",
          TextPart: "<h1>Appointment</h1>",
          HTMLPart: `
    <!DOCTYPE html>
  <html
    lang="en"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="utf-8" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="format-detection"
        content="telephone=no, date=no, address=no, email=no"
      />
      <title>Appointment</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
        rel="stylesheet"
        media="screen"
      />
      <style>
        *,
        body {
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
          color: rgb(51, 51, 51);
        }
        body {
          width: 100vw;
          height: fit-content;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          background: rgb(230,230,230);
          overflow: hidden;
          overflow-y: scroll;
        }

        .main {
          width: 85%;
          height: fit-content;
          padding: 0;
          margin: 5vh auto;  
          background: rgb(255,255,255);
        }
        p {
          font-size: 15px;
          line-height: 23px;
        }

        .header-content {
          width: 100%;
          height: fit-content;
          background: rgb(39, 174, 97);
          margin: 0;
          padding: 25px 20px;
          box-shadow: 0 5px 7px 5px rgb(231, 231, 231);
        }

        .header-content h1 {
          color: white;
          font: 700 40px "Montserrat", sans-serif;
          text-transform: uppercase;
          text-align: center;
        }

        @media screen and (max-width: 768px) {
          .header-content h1 {
            font-size: 25px;
          }
        }

        .header-content .line {
          width: 70%;
          margin: 5px auto;
          height: 0.7px;
          background: rgb(199, 198, 198);
          border-radius: 10px;
        }

        .header-content p {
          width: 80%;
          margin: 10px auto;
          text-align: center;
          color: whitesmoke;
        }

        .header-content h2 {
          color: white;
          text-align: center;
          text-transform: capitalize;
        }

        .email-content {
          background: rgb(255,255,255);
          width: 80%;
          margin: 5vh auto;
          height: fit-content;
          padding: 25px 20px;
          border-radius: 5px;
        }
        table {
          width: 100%;
          height: fit-content;
          margin: 10px auto;
          padding: 0;
        }

        tr {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          margin: 0;
          padding: 0;
          border-left: none;
          border: 1px solid rgb(241, 236, 236);
        }

        td {
          width: 50%;
          padding: 10px;
          margin: 0;
          font-weight: 500;
          font-size: 14px;
          color: rgb(109, 108, 108);
          border-left: 1px solid rgb(241, 236, 236);
        }

        h2 {
          text-align: center;
          padding: 12px;
          text-transform: capitalize;
          color: rgb(39, 174, 97);
        }

        h3 {
          text-align: center;
          text-transform: capitalize;
          padding: 10px;
          color: rgb(39, 174, 97);
        }

        .footer {
          width: 100%;
          height: fit-content;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p.message {
          text-align: center;
        }

        .footer a {
          text-decoration: none;
        }

        @media screen and (max-width: 600px) {
          .email-content {
            width: 100%;
            border: none;
            box-shadow: none;
          }

          .details {
            width: 95%;
          }
        }
      </style>
    </head>

    <body>
      <div class="main">
        <div class="header-content">
          <h1>biscam investment sarl</h1>
          <div class="line"></div>
          <h2>Appointment</h2>
          <p>
            Biscam companies with multi purpose services like flight ticket
            booking, cleaning services, car spare part purchase, car repairs,
            maritime services and more.
          </p>
        </div>
        <div class="email-content">
          <h2>appointment details</h2>
          <div class="details">
            <table>
              <tr>
                <td>NAME</td>
                <td>${data.name}</td>
              </tr>
              <tr>
                <td>EMAIL</td>
                <td>${data.email}</td>
              </tr>
              <tr>
                <td>TEL</td>
                <td>${data.tel}</td>
              </tr>
              <tr>
                <td>SERVICE</td>
                <td>${data.userService}</td>
              </tr>
            </table>
            <h2>client message:</h2>
            <p class="message">
              ${data.message}
            </p>
          </div>
        </div>
       
      </div> 
      <div class="footer">
          <a
            href="https://advancedtechacademy.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            >&copy;codingherald</a
          >
        </div>
    </body>
  </html>
  `,
          CustomID: "AppGettingStartedTest",
        },
      ],
    })
    .then((res) => {
      response.success = true;
      response.data = res.body;
    })
    .catch((err) => {
      response.data = err;
      response.success = false;
    });

  return response;
});
