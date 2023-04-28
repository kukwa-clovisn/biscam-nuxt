export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  if (to.path === "/") return;
  else if (to.path != "/cleaning-agency") {
    return navigateTo("/");
  }
});
