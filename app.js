const express = require('express');
const app = express();
const cors = require("cors")
const logger = require("morgan")
const logsController = require("./controllers/logsController.js")

app.use(express.json()) //parses incoming data
app.use(cors())

app.use(logger("dev"))

app.use('/logs', logsController);



app.get('/', (req, res) => {
    res.send("welcome to the captain's log");
});



app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found"});
});


module.exports = app;