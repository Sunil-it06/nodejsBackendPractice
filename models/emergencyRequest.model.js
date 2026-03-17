module.exports = (sequelize, DataTypes) => {

  const EmergencyRequest = sequelize.define("EmergencyRequest", {

    user_id: DataTypes.INTEGER,

    latitude: DataTypes.DOUBLE,

    longitude: DataTypes.DOUBLE,

    status: {
      type: DataTypes.ENUM("pending", "accepted", "completed"),
      defaultValue: "pending"
    }

  });

  return EmergencyRequest;
};