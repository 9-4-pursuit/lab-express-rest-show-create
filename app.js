const express = require('express');
const app = express();
const logsController = require('./controllers/logsController');

app.use(express.json());
app.use('/logs', logsController);

app.get('/', (req, res) => {
    res.send("Welcome to the Captain's log");
})

app.get('*', (req, res) => {
    res.status(404).send(`Page not found. <a href='/'>Go back to Home page</a>`);
})

module.exports = app;