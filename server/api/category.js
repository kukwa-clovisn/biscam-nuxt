export default defineEventHandler((event) => {
  const queryId = event.context.params;

  console.log("hgkhkh", queryId);

  return "category";
});
