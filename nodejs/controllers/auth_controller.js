const userModal = require("../src/models/user");
const Register = async (req, res, next) => {
  console.log(req.body);
  // object destructuring
  const { username, email, password } = req.body;
  try {
    // creation
    let newUser = await userModal({
      name: username,
      email,
      password,
    }).save();
    res.status(200).json({ msg: "yeah the server is running!" });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = { Register };
