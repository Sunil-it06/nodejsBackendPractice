const express = require("express");
const router = express.Router();

const { emergencyRequest } = require("../controllers/emergency.controller");

router.post("/emergency", emergencyRequest);

module.exports = router;