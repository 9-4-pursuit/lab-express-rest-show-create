const express = require("express");
const logEntriesController = require('./controllers/logsController');

const app = express();

app.use(express.json());

app.use('/logs', logEntriesController);

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
})

//  get a list or index of all logs
app.get("/logs", (req, res) => {
    res.send("OK");
})

app.get("*", (req, res) => {
    res.statusCode(404).json({error: "User trying to access route that doesn't exist"});
})

module.exports = app;