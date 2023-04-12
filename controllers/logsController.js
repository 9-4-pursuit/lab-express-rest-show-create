const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.status(202).json(logsArray);
});

logs.get("/:id", (req, res) => {
  const {id} = req.params;

  logsArray[id] ?
  res.status(202).json(logsArray[id]):
  res.redirect("/error");
});

module.exports = logs;