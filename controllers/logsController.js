const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

//GET
logs.get("/", (req, res) => {
  res.json(logsArray);
});
// GET INDEX

logs.get("/:id", (req, res) => {
  const { id } = req.params;

  logsArray[id] ? res.json(logsArray[id]) : res.redirect("/logs");
});
// POST
logs.post("/", (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);
  res.json(logsArray);
});

//DELETE

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  const updatedArray = logsArray.splice(id, 1);
  res.status(202).json(updatedArray);
});

module.exports = logs;
