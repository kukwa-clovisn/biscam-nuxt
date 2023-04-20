import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = "https://biscaminvestmentsarl.com";
});
