//configure express and express router
const express = require('express')
const logs = express.Router();

//set variable for log data
const logsArray = require('../models/log.js')

// Get All | index route
logs.get('/', (req, res) => {
    res.status(202).json(logsArray)
})

//Get by ID | individual show
logs.get('/:id', (req, res) => {
    const { id } = req.params
    const log = logsArray[id]
    if (log) {
        res.status(202).json(logsArray[id])
    } else {
        // res.status(404).send(`<a href='/'>Back to Home</a>`)
        res.redirect('/')
    }
})

//Create | POST
logs.post('/', (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog)
    res.status(202).json(logsArray)
})

//Delete by ID
logs.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (logsArray[id]) {
        const removedLogArr = logsArray.splice(id, 1);
        res.status(202).json(removedLogArr)
        // return|res can be either the deleted item or the updated array
    } else {
        res.status(404).json({ error: `No log with that ${id}` })
    }
})

//Put | update
logs.put('/:id', (req, res) => {
    const { id } = req.params;
    const updateLog = req.body;
    if (logsArray[id]) {
        logsArray[id] = updateLog
        res.status(202).json(logsArray)
    } else {
        res.status(404).json({ error: `No log matches that ${id}` })
    }

})
module.exports = logs