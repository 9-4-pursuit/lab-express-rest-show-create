const express = require("express")
const logs = express.Router()
const logsArray = require("../models/log.js")

// GET all logs
logs.get("/", (req, res) => {
    res.json(logsArray)
})

// GET individual log
logs.get("/:id", (req, res) => {
    const {id} = req.params
    log = logsArray[id]

    if(log){
        res.json(logsArray[id])
    
    }else {
        res.redirect(302, "/*")

    }

})

// // Create POST

logs.post("/", (req, res) => {
   const newLog = req.body
    logsArray.push(newLog)
    res.json(logsArray)
})

// delete

logs.delete('/:id', (req, res) => {
    const {id} = req.params

    if(logsArray[id]) {
        const deletedLog = logsArray.splice(id, 1)
        res.json(deletedLog)
    } else {
        res.status(404).json({sucess: false, error: `no log with this id: ${id}`})
    }
})





module.exports = logs