const http = require("http");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Port = 5002;
const app = express();

// all routes
const AuthRoutes = require("./routes/auth_route");

// static content
app.use(express.static(path.join(__dirname, "./views")));

// setting hbs engine
app.set("view engine", "hbs");
hbs.registerPartials(path.resolve(__dirname, "./views/partials"));

// routes
app.use("/api/v1", AuthRoutes);

app.get("^/$", (req, res) => {
  return res.status(200).render("pages/index", {
    name: "Hamza Qureshi",
  });
});
app.get("^/about$", (req, res) => {
  return res.status(200).render("pages/about");
});
app.get("^/service$", (req, res) => {
  return res.status(200).render("pages/services", {
    services: [
      { id: 1, name: "development" },
      { id: 2, name: "designing" },
      { id: 3, name: "app development" },
    ],
  });
});
app.listen(Port, () => {
  console.log(`server is running on port:${Port}`);
});
