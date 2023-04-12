const express = require("express");
const captainsLogs = express.Router();
const captainsLogsArray = require("../models/log.js");

captainsLogs.get("/", ( req, res ) => {
    res.status(202).json(captainsLogsArray)
});

captainsLogs.post('/', (req, res) => {
    const newLog = req.body
    captainsLogsArray.push(newLog)
    res.status(202).json({success: true, payload: captainsLogsArray})
});


captainsLogs.get('/:id', (req, res) => {
    const { id } = req.params
    const log = captainsLogsArray[id]
    if (log) {
        res.status(202).json(captainsLogsArray[id])
    } else {
        res.redirect(301, '/logs');
        // res.status(404).send(`The log you are looking for has not been submitted. <a href="/logs">Check other logs.</a>`)
    }
});


captainsLogs.delete("/:id", (req, res) => {
    const deletedCaptainsLog = captainsLogsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedCaptainsLog);
});

captainsLogs.put("/:id", (req, res) => {
    if (captainsLogsArray[req.params.id]) {
    captainsLogsArray[req.params.id] = req.body;
    res.status(200).json(captainsLogsArray[req.params.id]);
    } else {
    res.status(404).json({ error: "Not Found" });
    }
  });

module.exports = captainsLogs;