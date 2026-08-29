import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  console.log("client URL:",req.url);
  const product = [
    {
      name: "Iphone",
      price: 85000,
      qty: 2,
      discount: 15,
    },
    { name: "IQOO", price: 80000, qty: 2, discount: 20 },
    { name: "Nothing", price: 125000, qty: 5, discount: 20 },
  ];

  res.end(JSON.stringify(product));
});

server.listen(3000, () => console.log("Server is runninng at 3000...."));
