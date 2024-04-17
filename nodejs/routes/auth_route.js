const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/auth_controller");

// @POST
// /api/v1/register
router.post("/register", Register);
// @POST
// /api/v1/login
router.post("/login", Login);

module.exports = router;
