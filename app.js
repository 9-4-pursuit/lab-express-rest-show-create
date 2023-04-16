const express = require('express')
const app = express()
const logsController = require("./controllers/logsController.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/logs", logsController)
app.use("/logs/:id", logsController)


app.get('/', (req, res) => {
    res.send("welcome to the captain`s log")
})

app.get("*" , (req, res) => {
    res.status(404).send("404 not found")   
})
  

module.exports = app;
