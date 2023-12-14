const express = require("express");
const router = express.Router();
const {
  UserRegistration,
  UserLogin,
  AllUsers,
} = require("../controllers/user_controller");
const { verifyUserAccessToken } = require("../middleware/verifyUserAccessToken");

// Routes for user Auth
router
  .post("/register", UserRegistration)
  .post("/login", UserLogin) //fields validation check and user existence checks
  .get("/verifyMe")
  .get("/logout")
  .get("/readuser", verifyUserAccessToken, AllUsers);

module.exports = router;
