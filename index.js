// index.js - updated version
// import the app
const swaggerUi = require("swagger-ui-express");
const app = require("./app");
swaggerDocument = require("./swagger.json");

const port = 3000;

// DOCO
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`);
});
