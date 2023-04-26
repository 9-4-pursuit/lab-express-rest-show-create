const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log')


//get
logs.get('/', (req, res) => {
    res.json(logsArray)
})
//show one
logs.get('/:id', (req, res) => {
    const { id } = req.params
    const log = logsArray[id]
    if (log) {
        res.status(202).json(logsArray[id])
    } else {
        res.redirect(302, "/*")
    }
})
//post
logs.post('/', (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.status(202).json(logsArray)
})

//delete
logs.delete("/:id", (req, res) => {
    const {id} = req.params

if (logsArray[id]){
    const deletedLog = logsArray.splice(id, 1)
    res.json(deletedLog) 
}else{
    res.status(404).json({success: false, error: `There was no log with the id of ${id}` })
}
})

// UPDATE
logs.put("/:arrayIndex", (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
      logsArray[req.params.arrayIndex] = req.body;
      console.log("PUT route successful", req.body )
      res.status(200).json(logsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

module.exports = logs;