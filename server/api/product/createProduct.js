export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body);

  return {
    status: 200,
    message: "data received and under review",
  };
});
