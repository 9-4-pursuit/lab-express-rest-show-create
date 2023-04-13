const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

// index
logs.get('/', (req, res) => {
    res.status(202).json(logsArray)
})

// show
logs.get('/:id', (req, res) => {
    const { id } = req.params 
    const log = logsArray[id];
    if (log) {
        res.status(202).json(logsArray[id])
    } else {
        res.redirect()
    }
})

// create
logs.post('/', (req, res) => {
    const newLog = req.body;
    if (newLog) {
        logsArray.push(newLog);
        res.status(202).json(logsArray);
    } else {
        res.status(404).send('Please add a valid new log')
    }
})

// update
logs.put('/', (req, res) => {
    const { id } = req.params;
    const updatedLog = req.body;

    if (logsArray[id]) {
        logsArray[id] = updatedLog;
        res.status(303).json(logsArray[id])
    } else {
        res.status(404).json({success: false, error: `There was no log with the id of ${id}`})
    }
})

// delete
logs.delete('/:id', (req, res) => {
    const { id } = req.params;

    if (logsArray[id]) {
        const deletedLog = logsArray.splice(id, 1)
        res.status(202).json(deletedLog)
    } else {
        res.json({success: false, error: `There is no log at id ${id}`})
    }
})

module.exports = logs;