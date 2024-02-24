const Joi = require("joi");
const userModal = require("../src/models/user");

const Register = async (req, res, next) => {
  // object destructuring
  const { username, email, password: userPassword } = req.body;
  // fields validation
  const userFieldsSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error } = userFieldsSchema.validate(req.body);
  if (error) {
    return res
      .status(422)
      .json({ msg: `Incomplete Information!`, error: error.message });
  }
  try {
    // we need to check the new incomming email should not already register in DB.
    const existingUserCheck = await userModal.findOne({ email });
    if (existingUserCheck) {
      return res
        .status(409)
        .json({ msg: `Conflict! This user already exist.` });
    }

    // creation
    let newUser = await userModal({
      name: username,
      email,
      password: userPassword,
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

module.exports = { Register };
