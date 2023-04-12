
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

logs.get("/:id", (req, res) => {
    const { id } = req.params;
    const logs = logsArray[id];

    if (logs) {
        res.status(202).json(logs);
    } else {
        res.redirect("/*");
    }
})

module.exports = logs;
