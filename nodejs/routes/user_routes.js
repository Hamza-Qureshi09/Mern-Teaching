const express = require("express");
const router = express.Router();
const {
  UserRegistration,
  UserLogin,
  AllUsers,
} = require("../controllers/user_controller");
const userModal = require("../models/usermodal");

// middleware (req (middleware) => res)
const verifyUserAccessToken = async (req, res, next) => {
  const { access } = req.cookies;
  if (!access) {
    return res.status(401).json({ msg: "Unauthorized person!" });
  }
  // verification of token
  const findUser = await userModal.findOne({ userAccessToken: access });
  if (!findUser) {
    return res.status(404).json({ msg: "User not found!" });
  }
  req.verifyUser = findUser;
  next();
};

// Routes for user Auth
router
  .post("/register", UserRegistration)
  .post("/login", UserLogin) //fields validation check and user existence checks
  .get("/verifyMe")
  .get("/logout")
  .get("/readuser", verifyUserAccessToken, AllUsers);

module.exports = router;
