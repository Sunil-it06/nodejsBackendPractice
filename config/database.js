// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME || "emergency_db",
//   process.env.DB_USER || "root",
//   process.env.DB_PASS || "",
//   {
//     host: process.env.DB_HOST || "localhost",
//     dialect: "mysql",

//     logging: false,

//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
// );

// module.exports = sequelize;



const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;