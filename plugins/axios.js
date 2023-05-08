import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  // axios.defaults.baseURL = "http://localhost:9500";
  axios.defaults.baseURL = "https://biscaminvestmentsarl.com";
});
