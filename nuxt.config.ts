// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",

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
