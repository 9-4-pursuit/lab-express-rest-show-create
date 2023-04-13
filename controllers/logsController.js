const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const {order, mistakes, lastCrisis} = req.query;

  //for sorting and filtering
  //still need to work on lastCrisis
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


    res.status(202).json(logsArrayCopy);
  }
});

logs.get("/:id", (req, res) => {
  const {id} = req.params;
  
  logsArray[id] ?
  res.status(202).json(logsArray[id]):
  res.redirect("/error");
});

//check if the correct datatypes are entered in each field
const validateData = (req, res, next) => {
  if ((typeof req.body.captainName) !== "string" ||
  (typeof req.body.title) !== "string" || 
  (typeof req.body.post) !== "string" ||
  (typeof req.body.mistakesWereMadeToday) !== "boolean" ||
  (typeof req.body.daysSinceLastCrisis) !== "number") {
    res.status(400).send("Incorrect value type entered.");
  }
  next();
}

logs.post("/", validateData, (req, res) => {
  const newLog = req.body;

  logsArray.push(newLog);
  res.status(202).send(logsArray);
});

logs.put("/:id", validateData,(req, res) => {
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