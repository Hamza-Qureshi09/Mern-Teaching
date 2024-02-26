const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Port = process.env.PORT || 5002;
const app = express();
const cluster = require("cluster");
const os = require("node:os");
const numOfWorkers = os.cpus().length;

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

// test route
app.use("*/test$", (req, res) => {
  let a = 1;
  for (let i = 0; i < 1e8; i++) {
    a += i;
  }
  return res.status(200).json({
    msg: "working",
    worker: `this worker is responsible for dealing with this request. `,
  });
});

// handle error routes
app.use("*", (req, res) => {
  return res
    .status(500)
    .json({ msg: "sorry! this route is not defined & not available!" });
});

// // round robin
// app.use((req,res,next)=>{
//   const request=
// })

// performance optimization
// your traffic management=4 workers are now dealing with all your apis
if (cluster.isPrimary) {
  for (let i = 0; i < numOfWorkers; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`this worker ${worker.id} is killed.`);
    cluster.fork();
  });
} else {
  app.listen(Port, () => {
    console.log(
      `server is running on port:${Port}. The worker ${process.pid} is assigned.`
    );
  });
}

// app.listen(Port, () => {
//   console.log(
//     `server is running on port:${Port}. The worker ${process.pid} is assigned.`
//   );
// });
