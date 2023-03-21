// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
 
  modules: ["@element-plus/nuxt"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],runtimeConfig: {
    mongoUrl: process.env.mongo_uri,
  },
});
