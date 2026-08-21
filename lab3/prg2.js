import http from "http";

const server = http.createServer((req, res) => {
  console.log("Server hit by client");
  //res.write("<h1>Hello Client</h1>");
  res.end("<h2>Hello Client</h2>"); // as server as not known about h2 only known h1
});

server.listen(4444, () => console.log("Server is runnning..."));
