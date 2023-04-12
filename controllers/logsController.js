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
        res.status(404).send(`We do not have this log in our records. <a href='/logs'>Please browse our logs again.</a>`)
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

module.exports = logs;