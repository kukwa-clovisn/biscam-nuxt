// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt"],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss", // you should add main.scss somewhere in your app
  ],
});
