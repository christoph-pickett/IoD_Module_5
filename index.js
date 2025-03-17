const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, response) => {
  response.send([
    { id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
