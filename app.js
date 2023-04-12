const express = require('express');
const app = express();
const logs = require('./controllers/logsController')
const logsController = require('./controllers/logsController')

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;