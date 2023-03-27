export default defineEventHandler(async (event) => {
  console.log("event category:", event.context.params.category);
  return "hey listening to ur event know";
});
