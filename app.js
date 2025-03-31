const express = require("express");
const app = express();

// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/calculator", calculatorRoutes);
app.use("/tests", testRoutes);
app.use("/user", userRoutes);

// export the app
module.exports = app;
