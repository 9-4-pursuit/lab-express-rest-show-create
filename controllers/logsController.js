const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js')

// index
logs.get('/', (req, res) => {
    res.json(logsArray)
})

module.exports = logs;

// CREATE
// bookmarks.post("/", (req, res) => {
//     const newBookmark = req.body;
//     bookmarksArray.push(newBookmark);
//     res.status(201).json({ success: true, payload: newBookmark });
//   });