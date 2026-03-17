function getDistanceQuery(lat, lng) {
  return `
  (6371 * ACOS(
    COS(RADIANS(${lat})) *
    COS(RADIANS(latitude)) *
    COS(RADIANS(longitude) - RADIANS(${lng})) +
    SIN(RADIANS(${lat})) *
    SIN(RADIANS(latitude))
  ))
  `;
}

module.exports = { getDistanceQuery };