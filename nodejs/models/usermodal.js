const mongoose = require("mongoose");
const validator = require("validator");

// user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      uniqe: true,
      maxLength: 50,
      validate: [validator.isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: true,
      uniqe: true,
      maxLength: 50,
      validate: {
        validator: function (value) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        },
        message:
          "Password should be 8 charachters long and should contain at least one uppercase one lowercase and one digit!",
      },
    },
    userAccessToken: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// modal
const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
