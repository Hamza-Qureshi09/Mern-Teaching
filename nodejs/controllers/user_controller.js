const userModal = require("../models/usermodal");
const crypto = require("crypto");

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
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// Method @POST
const UserLogin = async (req, res) => {
  try {
    // destructure
    const { email, password } = req.body;

    //   1.user existience
    const userExist = await userModal.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ msg: "user not exist!" });
    }

    //   2. pass matching
    if (password !== userExist.password) {
      return res.status(400).json({ msg: "incorrect password" });
    }

    // credientials
    const token = crypto
      .createHmac("sha256", "hellomynameishamza")
      .update(userExist._id.toString())
      .digest("hex");

    // create cookie
    res.cookie("access", token, {
      httpOnly: true, //no access for client
      secure: false, //only when use https
      expires: new Date(Date.now() + 2 * 60 * 1000), //for next 2 mins
      sameSite: "None",
    });

    //   user record modification
    const newUserRec = await userModal.findOneAndUpdate(
      { _id: userExist._id },
      {
        $set: {
          userAccessToken: token,
        },
      },
      { new: true }
    );

    return res.status(200).json({ success: true, user: newUserRec });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// Method @GET
const AllUsers = async (req, res) => {
  const { name } = req.query;
  // reading
  const users = await userModal.find({ name: name }); //array
  return res.status(200).json({ users });
};
module.exports = { UserRegistration, UserLogin, AllUsers };
