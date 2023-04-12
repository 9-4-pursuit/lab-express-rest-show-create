//configure express and express router
const express = require('express')
const logs = express.Router();

//set variable for log data
const logsArray = require('../models/log.js')

// Get All | index route
logs.get('/', (req, res) =>{
    res.status(202).json(logsArray)
})

//Get by ID | individual show
logs.get('/:id',(req, res) =>{
const {id} = req.params
const log = logsArray[id]
if(log){
    res.status(202).json(logsArray[id])
}else {
    // res.status(404).send(`<a href='/'>Back to Home</a>`)
    res.redirect('/')
}
})

//Create | POST
logs.post('/',(req, res) =>{
    const newLog = req.body;
    logsArray.push(newLog)
    res.status(202).json(logsArray)
})

//Delete
logs.delete('/:id', (req, res) => {
    const {id} = req.params;
    // res.json({message: 'delete route'})
    const removedLogArr = logsArray.splice(id, 1);
     res.status(202).json(logsArray)
})

module.exports = logs