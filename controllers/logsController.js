const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

// index
logs.get('/', (req, res) => {
    res.status(202).json(logsArray)
})

module.exports = logs;