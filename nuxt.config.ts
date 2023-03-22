// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",
    [
      "nuxt-mail",
      {
        message: {
          to: "kcn.123.com@gmail.com",
        },
        smtp: {
          host: "kcn.123.com@gmail.com",
          port: 587,
        },
      },
    ],
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  runtimeConfig: {
    mongoUrl: process.env.mongo_uri,
    mail_api_key: process.env.mail_api_key,
    mail_secret_key: process.env.mail_secret_key,
  },
  nitro: {
    plugins: ["~/server/db.js"],
  },
});
