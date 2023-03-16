import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      appointment: false,
      menuState: false,
      scrollActive: false,
    };
  },
  mutations: {},
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
