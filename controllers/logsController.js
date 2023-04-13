const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js')

// index
logs.get('/', (req, res) => {
    res.json(logsArray)
})

logs.get('/:id', (req, res) => {
    const { id } = req.params
    const log = logsArray[id]
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

// Delete
logs.delete('/:id', (req, res) => {
    const { id } = req.params

    const deletedLog = logsArray.splice(id, 1)
    res.status(202).json(deletedLog)  
})





module.exports = logs;




// CREATE
// bookmarks.post("/", (req, res) => {
//     const newBookmark = req.body;
//     bookmarksArray.push(newBookmark);
//     res.status(201).json({ success: true, payload: newBookmark });
//   });