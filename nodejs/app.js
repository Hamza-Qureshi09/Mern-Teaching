const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Port = process.env.PORT || 5002;
const app = express();

// all routes
const AuthRoutes = require("./routes/auth_route");

// DB Connection
require("./src/conn/connection");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./views")));

// setting hbs engine
app.set("view engine", "hbs");
hbs.registerPartials(path.resolve(__dirname, "./views/partials"));

// routes
app.use("/api/v1", AuthRoutes);

// handle error routes
app.use("*", (req, res) => {
  return res
    .status(500)
    .json({ msg: "sorry! this route is not defined & not available!" });
});
app.listen(Port, () => {
  console.log(`server is running on port:${Port}`);
});
