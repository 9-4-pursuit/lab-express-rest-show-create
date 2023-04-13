const logsArray = require("../models/log.js");
const express = require("express");

const logs = express.Router();

//GET HOME
logs.get("/", (req, res) => {
  res.json(logsArray);
});

//GET INDEX
logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const log = logsArray[arrayIndex];

  if (log) {
    res.json(log);
  } else {
    res.redirect("/logs");
  }
});

 // CREATE
 //! invoking end helps to 
logs.post("/", (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);
  res.status(303).header( "/logs").end();
});

// UPDATE
logs.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const updatedLog = req.body;
  logsArray[arrayIndex] = updatedLog;
  res.status(303).header( "/logs/").end();
});

//DELETE
logs.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  logsArray.splice(arrayIndex, 1);
  res.status(303).header( "/logs").end();
});

module.exports = logs;
