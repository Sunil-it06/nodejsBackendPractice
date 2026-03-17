module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define("Hospital", {
    name: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  });

  return Hospital;
};