const express = require("express");
const router = require("./config/routes");
const app = express();
const mongoose = require("./config/database");
const port = 3010;
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

// one route set up
app.get("/", (req, res) => {
  res.send("welcome to Ticket Master App");
});

app.use("/", router);

//
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/client/build/index.html"));
//   });
// }

app.listen(process.env.PORT || port, () => {
  console.log("listening a port");
});
