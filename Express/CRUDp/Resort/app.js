const fs = require("fs");
const express = require("express");
const app = express();
const morgan = require("morgan");
const resortRouter = require("./routes/resortRoutes");
const userRouter = require("./routes/userRoutes");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use("/", (req, res, next) => {
  req.timeDate = new Date().toISOString();
  console.log(req.timeDate);
  console.log("middleware");
  next();
});

// ROUTE HANDLERS

app.use("/api/v1/resorts", resortRouter);
app.use("/api/v1/users", userRouter);

//   START SERVER

module.exports = app;
