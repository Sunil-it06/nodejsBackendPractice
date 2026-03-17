const { sequelize } = require("../models");

const findNearbyServices = async (lat, lng) => {

  const radius = 5; // 🔴 changed to 5 km
  const earthRadius = 6371;

  // Bounding box
  const latRange = radius / 111;
  const lngRange = radius / (111 * Math.cos(lat * Math.PI / 180));

  const minLat = lat - latRange;
  const maxLat = lat + latRange;
  const minLng = lng - lngRange;
  const maxLng = lng + lngRange;

  const replacements = { lat, lng, minLat, maxLat, minLng, maxLng };

  const hospitals = await sequelize.query(
    `
    SELECT 
      id,
      name,
      latitude,
      longitude,
      phone,
      address,
      ROUND(
        ${earthRadius} * ACOS(
          COS(RADIANS(:lat)) *
          COS(RADIANS(latitude)) *
          COS(RADIANS(longitude) - RADIANS(:lng)) +
          SIN(RADIANS(:lat)) *
          SIN(RADIANS(latitude))
        ),2
      ) AS distance_km
    FROM Hospitals
    WHERE latitude BETWEEN :minLat AND :maxLat
    AND longitude BETWEEN :minLng AND :maxLng
    HAVING distance_km <= ${radius}
    ORDER BY distance_km
    LIMIT 20
    `,
    {
      replacements,
      type: sequelize.QueryTypes.SELECT
    }
  );

  const ambulances = await sequelize.query(
    `
    SELECT 
      id,
      driver_name,
      phone,
      latitude,
      longitude,
      status,
      ROUND(
        ${earthRadius} * ACOS(
          COS(RADIANS(:lat)) *
          COS(RADIANS(latitude)) *
          COS(RADIANS(longitude) - RADIANS(:lng)) +
          SIN(RADIANS(:lat)) *
          SIN(RADIANS(latitude))
        ),2
      ) AS distance_km
    FROM Ambulances
    WHERE status='available'
    AND latitude BETWEEN :minLat AND :maxLat
    AND longitude BETWEEN :minLng AND :maxLng
    HAVING distance_km <= ${radius}
    ORDER BY distance_km
    LIMIT 10
    `,
    {
      replacements,
      type: sequelize.QueryTypes.SELECT
    }
  );

  return { hospitals, ambulances };
};

module.exports = { findNearbyServices };