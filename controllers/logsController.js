const express = require("express")
const logsArray = require("../models/log.js");

// initialize route
const logs = express.Router();

// index
logs.get('/', (req, res) => {
    res.json(logsArray);
})

// individual show --> get, read
logs.get('/:id', (req, res) => {
    const { id } = req.params
    // const log = logsArray[id]
    if (logsArray[Number(id)]) {
        res.json(logsArray[id])
    } else {
        res.redirect("/logs")
    }
})

// create
logs.post('/', (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.send(logsArray);
})

// update
logs.put("/:id", (req, res) => {
    const { id } = req.params;
    logsArray[id] = req.body
    res.send(logsArray)
})

// delete
logs.delete('/:id', (req, res) => {
    const { id } = req.params
    const removedLog = logsArray.splice(id, 1);
    res.status(200).json(removedLog)
})



module.exports = logs;