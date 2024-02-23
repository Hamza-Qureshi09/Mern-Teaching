const mongoose = require("mongoose");
const validator = require("validator");

function validatorFunc(email) {
  return validator.isEmail(email);
}

//  Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email should be unique"],
    required: true,
    validate: {
      validator: validatorFunc,
      message: (userEmail) => `${userEmail.value} is invalid!.`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Regular expression pattern to match at least one uppercase letter,
        // one lowercase letter, and one digit
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
      },
      message: (props) =>
        `${props.value} does not meet the password requirements. It should contain at least one uppercase letter, one lowercase letter, and one digit, and be at least 8 characters long.`,
    },
  },
});

// user modal
const usermodal = mongoose.model("users", userSchema);
module.exports = usermodal;
