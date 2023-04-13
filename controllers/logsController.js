const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const {order, mistakes, lastCrisis} = req.query;

  //
  if (!order && !mistakes && !lastCrisis) {
    res.status(202).json(logsArray);
  } else {
    let logsArrayCopy = [...logsArray];

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
    }

    if (mistakes === "true" || mistakes === "false") {
      const mistakesBoolean = mistakes === "true";

      logsArrayCopy = logsArrayCopy.filter((log) => {
        return log.mistakesWereMadeToday === mistakesBoolean;
      });
    }


    res.json(logsArrayCopy);
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

logs.put("/:id", (req, res) => {
  const {id} = req.params;
  const updatedLog = req.body;

  if (logsArray[id]) {
    logsArray[id] = updatedLog;
    res.status(200).send(logsArray);
  } else {
    res.redirect("/error");
  }
})

logs.delete("/:id", (req, res) => {
  const {id} = req.params;

  if (logsArray[id]) {
    const deletedLog = logsArray.splice(id,1);

    res.status(202).json(deletedLog);
  } else {
    res.redirect("/error");
  }
});

module.exports = logs;