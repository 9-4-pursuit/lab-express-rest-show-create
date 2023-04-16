const express = require("express").Router();
const logs = express;
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  const singleLog = logsArray[id];

  if (singleLog) {
    // res.status(202).json({ sucess: true, payload: logsArray[id] });
    res.status(202).json(singleLog);
  } else {
    // res.status(404).send(`Log not found.<a href="/logs">Return to logs</a>`);
    res.status(404).redirect("/logs");
  }
});

logs.post("/", (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog); 
    res.status(303).redirect("/logs");          
}); 

logs.delete("/:id", (req, res) => {
    const { id } = req.params;  
    const deletedLog = logsArray.splice(id, 1);     
    res.status(303).redirect("/logs");      
}); 

logs.put("/:id", (req, res) => {

    const { id } = req.params;      
    const updatedLog = req.body;            
    logsArray[id] = updatedLog;
    res.status(303).redirect("/logs");          
});         

// logs.put("/", (req, res) => {
//   res.json(logsArray);
// });

module.exports = logs;
