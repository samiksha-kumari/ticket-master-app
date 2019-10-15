const express = require("express");
const router = require("./config/routes");
const app = express();
const mongoose = require("./config/database");
const port = 3010;

app.use(express.json());

//one route set up
app.get("/", (req, res) => {
  res.send("welcome to Ticket Master App");
});

app.use("/", router);

app.listen(port, () => {
  console.log("listening a port", port);
});
