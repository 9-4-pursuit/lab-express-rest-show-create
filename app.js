const express = require("express");
const app = express();
const logsController = require("./controllers/logsController.js");
const logsV2Controller = require("./v2/controllers/logsController.js");

app.use(express.json());
app.use("/logs", logsController);
app.use("/v2/logs", logsV2Controller);

app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;