const express = require("express");
const router = express.Router();
const {
  UserRegistration,
  AllUsers,
} = require("../controllers/user_controller");

// middleware (req (middleware) => res)
const verifyUserName = (req, res, next) => {
  console.log("middleware running");
  const {name}=req.query
  if(!name){
    return res.status(400).json({msg:"invalid query"})
  }
  next()
};

// Routes for user Auth
router
  .post("/register", UserRegistration)
  .post("/login")
  .get("/verifyMe")
  .get("/logout")
  .get("/readuser", verifyUserName, AllUsers);

module.exports = router;
