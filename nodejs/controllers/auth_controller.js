const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModal = require("../src/models/user");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validations/auth_validation");
const Env_Config = require("../src/conf/env_conf");

const Register = async (req, res, next) => {
  // object destructuring
  const { username, email, password: userPassword } = req.body;
  // fields validation
  const fieldsValidation = RegisterValidation({
    username,
    email,
    userPassword,
  });
  if (!fieldsValidation.status) {
    return res.status(422).json({ error: fieldsValidation.error.message });
  }

  try {
    // we need to check the new incomming email should not already register in DB.
    const existingUserCheck = await userModal.findOne({ email });
    if (existingUserCheck) {
      return res
        .status(409)
        .json({ msg: `Conflict! This user already exist.` });
    }

    // hashing password
    const hashPasssword = await bcrypt.hash(userPassword, 10);

    // creation
    let newUser = await userModal({
      name: username,
      email,
      password: hashPasssword,
    }).save();
    if (!newUser) {
      return res.status(400).json({ msg: `Error in Creation!` });
    }

    // destructure the response
    const { password, __v, ...userInfo } = newUser._doc;

    return res.status(200).json({ msg: "Record is Created!", user: userInfo });
  } catch (error) {
    return res.status(500).json({ error: error?.message });
  }
};

// login
const Login = async (req, res, next) => {
  const worker_id = req.CustomWorkerID;
  const process_id = req.CustomProcessID;
  // object destructuring
  const { email, password } = req.body;
  // fields validation
  const fieldsValidation = LoginValidation({ email, password });
  if (!fieldsValidation.status) {
    return res.status(422).json({ error: fieldsValidation.error.message });
  }

  try {
    // user exist or not
    const existingUserCheck = await userModal.findOne({ email });
    if (!existingUserCheck) {
      return res.status(404).json({ msg: `User not Found!` });
    }

    // password validation
    const matchPassword = await bcrypt.compare(
      password,
      existingUserCheck?.password
    );

    if (!matchPassword) {
      return res.status(404).json({ msg: `Incorrect password!` });
    }

    // creating credientials
    const accessToken = jwt.sign({ existingUserCheck }, Env_Config.JWT_SECRET, {
      expiresIn: Env_Config.JWT_EXPIRES_IN,
      algorithm: Env_Config.JWT_ALGORITHM,
      issuer: Env_Config.JWT_ISSUER,
    });

    // setting token in cookie
    res.cookie("access", accessToken, {
      httpOnly: true,
      maxAge: 2 * 60 * 1000,
    });

    return res.status(200).json({ msg: "Success!" });
  } catch (error) {
    return res.status(500).json({ error: error?.message });
  }
};

module.exports = { Register, Login };
