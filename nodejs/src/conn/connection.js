const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {})
  .then(() => {
    console.log("connection to DB is successfull");
  })
  .catch((err) => {
    console.log(err);
  });
