const express = require("express");

const logEntries = express.Router();
const logEntriesArray = require("../models/log.js")

logEntries.get("/", (req, res) => {
    const { order }= req.query;
    if (order === "asc") {
        res.status(202).json(logEntriesArray.sort((a,b) => {
            const textA = a.title.toLowerCase();
            const textB = b.title.toLowerCase();
            return textA < textB ? -1 : textB < textA ? 1 : 0;
        }))

    } else {
        res.status(202).json(logEntriesArray);
    }
    
})

logEntries.get('/:id', (req, res) => {
    const { id } = req.params;
    const logEntry = logEntriesArray[id]
    if (logEntry) {
        res.status(202).json(logEntriesArray[id])
    } else {
        //res.status(404).send(`The log entry you requested is not hosted on our site at this time.`)
        res.redirect('/logs/notfound');
    }
})

logEntries.post('/', (req, res) => {
    const newLogEntry = req.body;
    logEntriesArray.push(newLogEntry);
    res.status(202).json({success: true, payload: logEntriesArray})
})

logEntries.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedLogEntry = req.body;
    if (logEntriesArray[id]) {
        logEntriesArray[id] = updatedLogEntry;
        res.status(200).json(logEntriesArray)
    } else {
        res.status(404).json(`There was no log entry with id ${id}`)
    }
})

logEntries.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedLogEntry = logEntriesArray[id];
    if (logEntriesArray[id]) {
        res.status(202).json(deletedLogEntry);
        //Destructive of original.
        logEntriesArray.splice(id, 1);
    } else {
        res.status(404).json(`There was no log entry with id ${id}`)
    }


})

module.exports = logEntries;