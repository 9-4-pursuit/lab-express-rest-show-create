const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

//Create
logs.post("/", (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);
  res.send(newLog);
});

//READ
logs.get("/", (req, res) => {
  res.send(logsArray);
});


//individual

logs.get("/:i", (req, res) => {
  const { i } = req.params;
  const log = logsArray[i];
  if (log) {
    res.send(log);
  } else {
    res.status(404).redirect("*");
  }
});

//DELETE
logs.delete("/:i", (req, res) => {
    const { i } = req.params
    const log = logsArray[i]

    if(log) {
        const deletedLog = logsArray.splice(i, 1)
        res.send(deletedLog)
    } else {
        res.send("No log at the index exists")
    }
})

module.exports = logs;
