//configure express
const express = require('express');
const app = express();

//set controller
const logsController = require('./controllers/logsController')

app.use(express.json())
app.use('/logs', logsController)

app.get('/', (req, res) =>{
    res.send('Welcome to the Captains Log')
})

app.get('*', (req, res) => {
    res.status(404).json({error: 'page not found'})
})


module.exports = app;