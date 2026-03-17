const express = require("express");
const app = express();

const emergencyRoutes = require("./routes/emergency.routes");

app.use(express.json());

app.use("/api", emergencyRoutes);

module.exports = app;