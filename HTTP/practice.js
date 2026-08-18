const fs = require("fs");
const path = require("path");

process.env.UV_THREADPOOL_SIZE = 4;

const filePath = path.join(
  __dirname,
  "..",
  "2-how-node-works",
  "final",
  "test-file.txt",
);

const add = require("./practice5.js");

setTimeout(() => console.log("Timer 1 is done!"), 0);
setImmediate(() => console.log("Immediate 1 is done!"));

fs.readFile(filePath, () => {
  console.log("I/O finished");
});

console.log("Hello from the top-level code");

console.log(`${add(2, 3)}`);

console.log(`${add(9, 3)}`);
