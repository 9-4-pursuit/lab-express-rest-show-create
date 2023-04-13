const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js')

// index
logs.get('/', (req, res) => {
  res.json(logsArray)
})

// individual
logs.get("/:id", (req, res) => {
  const { id } = req.params
  const log = logsArray[id]

  if (log) {
    res.json(logsArray[id])

  } else {
    res.redirect(302, "/*")
  }
})

// create
logs.post("/", (req, res) => {
  const createNewLog = req.body
  logsArray.push(createNewLog)
  res.json(logsArray)
})

// delete
logs.delete("/:id", (req, res) => {
  const { id } = req.params

  if (logsArray[id]) {
    const deleteLog = logsArray.splice(id, 1)
    res.json(deleteLog)
  } else {
    res.status(404).json({ sucess: false, error: `no log with this id: ${id}` })
  }
})

module.exports = logs;