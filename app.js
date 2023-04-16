const express = require('express');
const app = express();

//controllers
const logsController = require('./controllers/logsController.js');

//routes
app.use(express.json());
app.use('/logs', logsController);

app.get('/', (req, res) => {
  res.send('Welcome to the captain\'s log');
})

app.get('*', (req, res) => {
  res.status(404).json({ error: "Page Not Found"});
})

module.exports = app;