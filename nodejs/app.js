const http = require("http");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Port = 5002;
const app = express();

// static content
app.use(express.static(path.join(__dirname, "./views")));

// setting hbs engine
app.set("view engine", "hbs");

app.get("^/$", (req, res) => {
  return res.status(200).render("index", {
    name: "Hamza Qureshi",
  });
});
app.get("^/about$", (req, res) => {
  return res.status(200).render("about");
});
app.get("^/service$", (req, res) => {
  return res.status(200).render("services", {
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
