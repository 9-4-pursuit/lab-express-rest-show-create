const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const {order, mistakes, lastCrisis} = req.query;

  //
  if (!order && !mistakes && !lastCrisis) {
    res.status(202).json(logsArray);
  } else {
    const logsArrayCopy = [...logsArray];

    //sort ascending
    if (order === "asc") {
      logsArrayCopy.sort((a, b) => {
        logTitleA = a.title.toLowerCase();
        logTitleB = b.title.toLowerCase();
        if (logTitleA < logTitleB) {
          return -1;
        } 
        if (logTitleA > logTitleB) {
          return 1;
        }
        return 0;
      })
      res.json(logsArrayCopy);
    }

    //sort descending
    if (order === "desc") {
      logsArrayCopy.sort((a, b) => {
        logTitleA = a.title.toLowerCase();
        logTitleB = b.title.toLowerCase();
        if (logTitleA > logTitleB) {
          return -1;
        } 
        if (logTitleA < logTitleB) {
          return 1;
        }
        return 0;
      })
      res.json(logsArrayCopy);
    }


  }
});

logs.get("/:id", (req, res) => {
  const {id} = req.params;
  
  logsArray[id] ?
  res.status(202).json(logsArray[id]):
  res.redirect("/error");
});

logs.post("/", (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);
  res.status(202).send(logsArray);
});

module.exports = logs;