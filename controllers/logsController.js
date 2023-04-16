const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get('/', (req, res) => {
    res.json(logsArray)
})

logs.get("/:id", (req, res) => {
    const { id } = req.params
    log = logsArray[id]

    if (log) {
        res.json(logsArray[id])
    } else {
        res.redirect(302, "/*")
    }
})

logs.post("/", (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.json(logsArray)
})

logs.delete('/:id', (req, res) => {
    const { id } = req.params
    if (logsArray[id]) {
        const deletedLog = logsArray.splice(id, 1)
        res.json(deletedLog)
    } else {
        res.status(404).json({ success: false, error: `no log with this id: 1` })
    }
})

module.exports = logs;