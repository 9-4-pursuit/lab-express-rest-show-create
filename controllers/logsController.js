const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

//validation
const validateURL = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "htttp://" ||
        req.body.url.substring(0, 8) === "https://"
    ){
        return next();
    } else {
        res 
        .status(400)
        .send(`Oops, you forgot to start your url with http:// or https://`)
    }
}


//index
logs.get("/", (req,res) => {
    res.status(202).json(logsArray)
})

//individual show
logs.get('/:id', async (req, res) => {
console.log(req.params.id)
const { id } = req.params
const log = logsArray[id]
if (log) {
res.status(202).json(log)
} else {
    res.status(404).send(` Sorry the index you requested is not hosted on our site at the time! <a href="/logs">Find captian's log here!</a>`)
}
})


//create 
 logs.post("/", (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.status(202).json({success: true, payload: logsArray})
 })

module.exports = logs