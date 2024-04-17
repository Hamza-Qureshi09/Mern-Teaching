const mongoose = require("mongoose");
const Env_Config = require("../conf/env_conf");

mongoose
  .connect(Env_Config.DATABASE_URI, {})
  .then(() => {
    console.log("connection to DB is successfull");
  })
  .catch((err) => {
    console.log(err);
  });
