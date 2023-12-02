const express = require("express");
const router = express.Router();
const {
  UserRegistration,
  UserLogin,
  AllUsers,
} = require("../controllers/user_controller");

// middleware (req (middleware) => res)
const verifyUserName = (req, res, next) => {
  console.log("middleware running");
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ msg: "invalid query" });
  }
  next();
};

// Routes for user Auth
router
  .post("/register", UserRegistration)
  .post("/login", UserLogin) //fields validation check and user existence checks
  .get("/verifyMe")
  .get("/logout")
  .get("/readuser", verifyUserName, AllUsers);

module.exports = router;
