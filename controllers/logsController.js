
const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logsModel");

// Then we do our GETS
logs.get("/", (req, res) => {
    if (res) {
        res.status(202).json(logsArray);
    } else {
        res.status(400).json({ error: "Model not found" });
    }
});

// INDIVIDUAL LOG
logs.get("/:id", (req, res) => {
    const { id } = req.params;
    const logs = logsArray[id];

    if (logs) {
        res.status(202).json(logs);
    } else {
        res.redirect(302, "/*");
    }
})

// CREATE
logs.post("/", (req, res) => {
    const newLog = req.body;
    logsArray.push(newLog);
    res.status(202).json({ success: true, payload: logsArray });
    
    // if (newLog.captainName === undefined) {
    //     logsArray.push(newLog);
    //     res.status(202).json({ success: true, payload: logsArray });
    // } else {
    //     res.status(404).json({ success: false, error: "Not created successfully" });
    // }
});

// UPDATE
logs.put("/:id", (req, res) => {
    const { id } = req.params;
    const updatedLog = req.body;

    if (logsArray[id]) {
        logsArray[id] = updatedLog;
        res.status(202).json({ success: true, payload: logsArray[id] });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
})

// DELETE
logs.delete("/:id", (req, res) => {
    const { id } = req.params;

    if (logsArray[id]) {
        const deletedLog = logsArray.splice(id, 1);
        res.status(202).json({ success: true, payload: deletedLog });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
});

module.exports = logs;
