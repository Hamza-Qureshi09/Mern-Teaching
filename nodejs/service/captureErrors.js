const ErrorHandler = require("./ErrorHandler");
module.exports = (err, req, res, next) => {
  err.status = err.status || 500; //internal server error
  err.message = err.message || "Internal server error";

  res.status(err.status).json({
    success: false,
    message: err.message,
  });
};
