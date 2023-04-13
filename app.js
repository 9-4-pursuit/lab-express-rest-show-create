const express = require('express');
const app = express();
 const logsController = require("./controllers/logsController");

app.use(express.json())// parse incoming data

// //middleware 
// app.use((req, res, next) => {
//     console.log("this code runs for every request")
//     next()
// })

app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send("welcome to captain's log");
})

app.get("*", (req,res) => {
    res.status(404).json({error: "Page not found"});
})

module.exports = app;