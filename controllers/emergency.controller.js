const { findNearbyServices } = require("../services/emergency.service");

const emergencyRequest = async (req, res) => {

  try {

    const { latitude, longitude } = req.body;

    const services = await findNearbyServices(latitude, longitude);

    res.json({
      success: true,
      data: services
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = { emergencyRequest };