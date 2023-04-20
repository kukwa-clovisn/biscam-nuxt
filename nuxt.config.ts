// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",

    // [
    //   "mailjet",
    //   {
    //     apiKey: process.env.mail_api_key,
    //     apiSecret: process.env.mail_secret_key,
    //   },
    // ],
  ],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    "@/plugins/axios",
  ],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  runtimeConfig: {
    // mongoUrl: process.env.mongo_uri,
    // mail_api_key: process.env.mail_api_key,
    // mail_secret_key: process.env.mail_secret_key,
    // mailerUser: process.env.MAILER_USER,
    // mailerPass: process.env.MAILER_PASS,
    // mailerLog: process.env.MAILER_LOG,
  },
  nitro: {
    // plugins: ["~/server/db.js"],
  },
});
