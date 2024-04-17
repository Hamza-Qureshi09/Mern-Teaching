const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Port = process.env.PORT || 5002;
const app = express();
const cookieParser = require("cookie-parser");
const cluster = require("cluster");
const os = require("node:os");
const numOfWorkers = os.cpus().length;
let workerCounter = 0;

// all routes
const AuthRoutes = require("./routes/auth_route");

// DB Connection
require("./src/conn/connection");

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./views")));

// setting hbs engine
app.set("view engine", "hbs");
hbs.registerPartials(path.resolve(__dirname, "./views/partials"));

// round robin
app.use((req, res, next) => {
  workerCounter = (workerCounter + 1) % numOfWorkers;
  console.log(
    `Request received & processed by worker custom_worker_Id: ${
      workerCounter + 1
    } & actual_worker_id ${cluster.worker.id} & process_id ${process.pid}`
  );
  req.CustomWorkerID = cluster.worker.id;
  req.CustomProcessID = process.pid;
  next();
});

// routes
app.use("/api/v1", AuthRoutes);

// test route
app.use("*/test$", (req, res) => {
  const worker_id = req.CustomWorkerID;
  const process_id = req.CustomProcessID;

  res.set("Custome-Header", "this will be the value..");
  return res.status(200).json({
    msg: "working",
    worker: `this worker is responsible for dealing with this request. `,
    worker_id,
    process_id,
  });
});

// handle error routes
app.use("*", (req, res) => {
  return res
    .status(500)
    .json({ msg: "sorry! this route is not defined & not available!" });
});

// performance optimization
// your traffic management=4 workers are now dealing with all your apis
if (cluster.isPrimary) {
  // numOfWorkers
  for (let i = 0; i < 1; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`this worker ${worker.id} is killed.`);
    cluster.fork();
  });
} else {
  app.listen(Port, () => {
    console.log(
      `server is running on port:${Port}. The process id: ${process.pid}`
    );
  });
}

// app.listen(Port, () => {
//   console.log(
//     `server is running on port:${Port}. The worker ${process.pid} is assigned.`
//   );
// });
