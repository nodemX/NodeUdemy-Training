const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("middleware");
  //   res.send("Hello, from the express server!");
  next();
});

app.get("/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the home page for GET !" });
});

app.post("/home", (req, res) => {
  res.send("Welcome to the home page for POST !");
});

app.listen(port, "127.0.0.1", () => {
  console.log(`server is running on port ${port}....`);
});
