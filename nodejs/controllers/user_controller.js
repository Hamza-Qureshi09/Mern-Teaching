const userModal = require("../models/usermodal");

// Method @POST
const UserRegistration = async (req, res) => {
  try {
    // destructure
    const { name, email, password, confirmPassword } = req.body;

    //   1. not empty
    if (!name || !email || !password || !confirmPassword) {
      res.status(406).json({ msg: "incomplet information!" });
    }

    //   2. pass & confirm pass should match
    if (password !== confirmPassword) {
      res.status(400).json({ msg: "incorrect password" });
    }

    //   user creation
    const newUser = await userModal({
      name: name,
      email: email,
      password: password,
    }).save();
    console.log(newUser, "created user");
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// Method @GET
const AllUsers = async (req, res) => {
  const { name } = req.query;
  // reading
  const users = await userModal.find({ name: name }); //array
  res.status(200).json({ users });
};
module.exports = { UserRegistration, AllUsers };
