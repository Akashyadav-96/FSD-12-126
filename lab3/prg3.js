import http from "http";

const server = http.createServer((req, res) => {
  console.log("Server hit by client");
  //res.write("<h1>Hello Client</h1>");
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h2>Hello Client</h2>");
});

server.listen(4444, () => console.log("Server is runnning..."));
