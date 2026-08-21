const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

const resorts = JSON.parse(
  fs.readFileSync(`${__dirname}/data/resorts.json`, "utf-8"),
);

app.use(express.json());
app.use("/", (req, res, next) => {
  console.log("middleware");
  //   res.write("Hello, from the express server!");
  next();
});

app.get("/api/v1/resorts/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  const resortsbyid = resorts.find((el) => el.id === id);
  console.log(resortsbyid);
  if (!resortsbyid) {
    res.status(404).json({
      message: "fail",
      Error: "Invalid ID",
    });
  } else res.status(200).json({ resortsbyid });
});

app.get("/api/v1/resorts", (req, res) => {
  res.status(200).json({ resorts });
});

app.patch("/api/v1/resorts/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newPrice = req.body.pricePerNight;
  console.log(newPrice);

  const resortsbyid = resorts.find((el) => el.id === id);
  console.log(resorts);
  if (!resortsbyid) {
    res.status(404).json({
      message: "fail",
      Error: "Invalid ID",
    });
  } else {
    resortsbyid.pricePerNight = newPrice;
    console.log(resortsbyid);
    console.log(resorts);
    fs.writeFile(
      `${__dirname}/data/resorts.json`,
      JSON.stringify(resorts),
      () => {
        res.json({
          resorts,
        });
      },
    );
  }
});

app.patch("/api/v1/resorts", (req, res) => {
  res.send("page for PATCH !");
});

// app.delete("/api/v1/resorts", (req, res) => {
//   res.send("page for DELETE !");
// });

app.listen(port, "127.0.0.1", () => {
  console.log(`server is running on port ${port}....`);
});
