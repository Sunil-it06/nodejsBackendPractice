require("dotenv").config();
const http = require("http");
const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    // Sync models (optional in production)
    await sequelize.sync();

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
}

startServer();