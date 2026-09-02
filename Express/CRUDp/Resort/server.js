const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
const port = process.env.PORT;

// connect to DB
mongoose.connect(db).then((con) => {
  console.log("DB connection successful!");
});

app.listen(port, "127.0.0.1", () => {
  console.log(`server is running on port ${port}....`);
});
