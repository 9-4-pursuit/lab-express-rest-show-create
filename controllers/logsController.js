const express = require('express');
const logs = express.Router();
const logsArray = require("../models/log.js")


logs.get("/", (req, res) => {
    res.status(202).json(logsArray)
})

// get
logs.get('/:id', (req, res) => {
    const { id } = req.params;
    const logs = logsArray[id];
    if (logs) {
        res.status(202).json(logsArray[id])
    } else {
        res.redirect(404)
    }
})

// create
logs.post('/', (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog);
    res.status(202).json(logsArray);
})

// update
logs.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedLog = req.body;

    if (logsArray[id]) {
        logsArray[id] = updatedLog;
        res.status(202).json(logsArray[id]);
    } else {
        res.status(404).send(`There was no log with the id of ${id}`);
    }
})

// delete
logs.delete('/:id', (req, res) => {
    const { id } = req.params;
    const updatedArray = logsArray.splice(id, 1);

    if (logsArray[id]) {
        res.status(202).json(updatedArray);
    } else {
        res.status(404).send(`There was no log with the id of ${id}`);
    }
})

module .exports = logs;