const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get('/', (req, res) => {
    res.status(202).json({ success: true, payload: logsArray})
})

module.exports = logs;