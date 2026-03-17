module.exports = (sequelize, DataTypes) => {
  const Ambulance = sequelize.define("Ambulance", {
    driver_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    status: {
      type: DataTypes.ENUM("available", "busy"),
      defaultValue: "available"
    }
  });

  return Ambulance;
};