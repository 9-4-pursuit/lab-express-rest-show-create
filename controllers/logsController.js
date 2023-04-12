// this is where we write the logs routes -- we dont have a dtabase so we use the models
const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req))

logs.post("/", (req, res) => {
  const newLog = req.body;

  logsArray.push(newLog);

  res.status(200).json({ success: true, payload: newLog });
});

module.exports = logs;
