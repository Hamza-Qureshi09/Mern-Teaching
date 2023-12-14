const userModal = require("../models/usermodal");
const ErrorHandler = require("../service/ErrorHandler");

const verifyUserAccessToken = async (req, res, next) => {
  const { access } = req.cookies;
  if (!access) {
    return next(
      new ErrorHandler({ message: "Unauthorized person!", status: 401 })
    );
  }
  // verification of token
  const findUser = await userModal.findOne({ userAccessToken: access });
  if (!findUser) {
    return next(new ErrorHandler({ message: "User not found!", status: 404 }));
  }
  req.verifyUser = findUser;
  next();
};

module.exports = { verifyUserAccessToken };
