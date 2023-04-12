const express = require('express');
const logs = require('./controllers/logsController');
const app = express();
const logsController = require('./controllers/logsController');

// app.use(express.json()) // parse incoming data
app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
})

app.use("/logs", logsController)

// app.get('*', (req, res) => {
//     res.status(404).json({ error: "Page not found"});
// });

module.exports = app;