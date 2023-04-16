const express = require("express");
const logs = require("./controllers/logsController.js");
const logsController = require("./controllers/logsController.js");
const app = express();

// middleware
app.use(express.json());  // parsing incoming data

// routes
app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send("welcome to the captain's log")
})

module.exports = app;