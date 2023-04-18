const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js')

logs.post("/", (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.json(logsArray)
})

// index
logs.get('/', (req, res) => {
    res.json(logsArray)
})

// Single Log
logs.get('/:id', (req, res) => {
    const { id } = req.params
    const log = logsArray[id]
    if (log) {
        res.send(logsArray[id])
    } else {
        res.status(404).redirect("*")
    }
})

// Delete
logs.delete('/:id', (req, res) => {
    const { id } = req.params
    const deletedLog = logsArray.splice(id, 1)
    res.status(202).json(deletedLog)  
})

// CREATE
logs.post("/newlog", (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog);
    res.status(201).json({ success: true, payload: newLog });
  });

module.exports = logs;




