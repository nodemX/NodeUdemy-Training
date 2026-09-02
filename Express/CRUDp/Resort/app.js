const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const resortRouter = require("./routes/resortRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use("/", (req, res, next) => {
  req.timeDate = new Date().toISOString();
  console.log(req.timeDate);
  next();
});

// ROUTE HANDLERS
console.log("resortRouter");

app.use("/api/v1/resorts", resortRouter);
app.use("/api/v1/users", userRouter);

//   START SERVER

module.exports = app;
