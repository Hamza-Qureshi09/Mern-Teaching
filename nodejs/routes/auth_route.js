const express = require("express");
const router = express.Router();
const { Register } = require("../controllers/auth_controller");

// @POST
// /api/v1/register
router.post("/register", Register);

module.exports = router;
