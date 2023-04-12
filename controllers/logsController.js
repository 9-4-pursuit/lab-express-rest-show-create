const express = require("express")
const logs = express.Router()
const logsArray = require("../models/log.js")


logs.get("/", (req, res) => {
    res.json(logsArray)
})

logs.get("/:id", (req, res) => {
    const {id} = req.params
    log = logsArray[id]

    if(log){
        res.json(logsArray[id])
    
    }else {
        res.send(`The log requested is not available <a href="/logs">please browse here</a>`)

    }

})

module.exports = logs