const express = require("express");
const app = express();
const logsController = require("./controllers/logsController")


app.get("/", (req, res) => {
res.send ("welcome to captain's log")
})


app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json()
})
module.exports = app;
