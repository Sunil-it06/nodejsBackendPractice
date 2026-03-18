const express = require("express");
const app = express();

const emergencyRoutes = require("./routes/emergency.routes");

app.use(express.json());

// ✅ Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running 🚀",
    time: new Date()
  });
});

// ✅ Root Route (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

// Your existing routes
app.use("/api", emergencyRoutes);

module.exports = app;
