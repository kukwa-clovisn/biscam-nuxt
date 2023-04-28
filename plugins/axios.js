import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = "http://localhost:3000";
  // axios.defaults.baseURL = "https://biscaminvestmentsarl.com";
});
