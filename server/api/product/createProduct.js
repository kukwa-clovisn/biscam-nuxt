export default defineEventHandler((req, res) => {
  console.log("req", req.body);
  // console.log("res", res.body);

  return {
    status: 200,
    message: "data received and under review",
  };
});
