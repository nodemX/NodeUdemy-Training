const fs = require("fs");

const resorts = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/resorts.json`, "utf-8"),
);

module.exports.checkId = (req, res, next, val) => {
  const id = val;
  console.log(`id is ${id}`);
  const resortsbyid = resorts.find((el) => el.id === id);
  if (!resortsbyid) {
    res.status(404).json({
      message: "fail",
      Error: "Invalid ID",
    });
  } else next();
};

module.exports.getResortsById = (req, res) => {
  const id = req.params.id;
  const resortsbyid = resorts.find((el) => el.id === id);
  res.status(200).json({ resortsbyid });
};

module.exports.getResorts = (req, res) => {
  res.status(200).json({
    status: "success",
    timeDate: req.timeDate,
    results: resorts.length,
    data: { resorts },
  });
};

module.exports.postResorts = (req, res) => {
  const newResort = req.body;

  if (newResort === undefined) {
    res.status(404).json({
      message: "fail",
      Error: "Invalid Details",
    });
  } else {
    resorts.push(newResort);
    fs.writeFile(
      `${__dirname}/../data/resorts.json`,
      JSON.stringify(resorts, null, 2),
      () => {
        res.status(201).json({
          resorts,
        });
      },
    );
  }
};

module.exports.patchResortById = (req, res) => {
  //const id = req.params.id;
  const newPrice = req.body.pricePerNight;
  const resortsbyid = resorts.find((el) => el.id === id);

  resortsbyid.pricePerNight = newPrice;

  fs.writeFile(
    `${__dirname}/../data/resorts.json`,
    JSON.stringify(resorts, null, 2),
    () => {
      res.json({
        resorts,
      });
    },
  );
};

module.exports.deleteResortById = (req, res) => {
  res.status(204).json();
};
