export default defineEventHandler((event) => {
  console.log(event.req);

  return {
    status: 200,
    message: "data received and under review",
  };
});
