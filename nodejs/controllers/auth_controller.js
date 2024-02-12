const Register = async (req, res, next) => {
  console.log("request", req.body);
  res.status(200).json({ msg: "yeah the server is running!" });
};

module.exports = { Register };
