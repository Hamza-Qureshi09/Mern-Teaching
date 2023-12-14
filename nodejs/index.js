const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const Port = process.env.PORT || 5002;

// files
const CustomErrorHandler = require("./service/captureErrors");

// Database connection
require("./db/conn");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("combined"));

// Routes
const UserRoute = require("./routes/user_routes");

// Middleware
app.use("/api", UserRoute);
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    msg: "Route not exist!",
  });
});
app.use(CustomErrorHandler);

// uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`server is shutting down due to handling uncaught exception`);
  process.exit(1);
});

app.listen(Port, () => {
  console.log(
    `server is running on port: ${Port} and worker ${process.pid} is assigned`
  );
});
