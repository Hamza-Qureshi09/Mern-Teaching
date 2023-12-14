const userModal = require("../models/usermodal");
const crypto = require("crypto");
const ErrorHandler = require("../service/ErrorHandler");

// Method @POST
const UserRegistration = async (req, res, next) => {
  try {
    // destructure
    const { name, email, password, confirmPassword } = req.body;

    //   1. not empty
    if (!name || !email || !password || !confirmPassword) {
      return next(
        new ErrorHandler({
          message: "incomplet information!",
          status: 406,
        })
      );
    }

    //   2. pass & confirm pass should match
    if (password !== confirmPassword) {
      return next(
        new ErrorHandler({
          message: "incorrect password",
          status: 400,
        })
      );
    }

    //   user creation
    const newUser = await userModal({
      name: name,
      email: email,
      password: password,
    }).save();
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    return next(new ErrorHandler({ message: error.message, status: 400 }));
  }
};

// Method @POST
const UserLogin = async (req, res, next) => {
  try {
    // destructure
    const { email, password } = req.body;

    //   1.user existience
    const userExist = await userModal.findOne({ email });
    if (!userExist) {
      return next(
        new ErrorHandler({ message: "user not exist!", status: 404 })
      );
    }

    //   2. pass matching
    if (password !== userExist.password) {
      return next(
        new ErrorHandler({ message: "incorrect password", status: 400 })
      );
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
    return next(new ErrorHandler({ message: error.message, status: 400 }));
  }
};

// Method @GET
const AllUsers = async (req, res) => {
  const User = req.verifyUser;
  const { name } = req.query;
  // reading
  const users = await userModal.find({ name: name }); //array
  return res.status(200).json({ users });
};
module.exports = { UserRegistration, UserLogin, AllUsers };
