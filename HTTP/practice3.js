const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //   // Handle the request 1
  //   fs.readFile(
  //     "C:\\nodemon\\2-how-node-works\\final\\test-file.txt",
  //     (err, data) => {
  //       if (err) {
  //         res.writeHead(500, { "Content-Type": "text/plain" });
  //         res.end("Error reading file1.txt");
  //       }
  //     },

  //   //

  // solution 3
  const readable = fs.createReadStream(
    "C:\\nodemon\\2-how-node-works\\final\\test-file.txt",
  );

  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening on port 8000");
});
