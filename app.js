const express = require('express');
const app = express();
const logsController = require('./controllers/logsController');

app.use(express.json())
app.use('/logs', logsController)

app.get('/', (request, response) => {
    response.send("welcome to the captain's log")
})

//can change the unused request to _ at end , after passing tests 

app.get('*', (request, response) => {
    response.status(404).json({ error: "Page not found"})
})

module.exports = app;