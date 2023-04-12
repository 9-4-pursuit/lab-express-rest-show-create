const express = require("express")

const logs = express.Router()

const logsArr = require("../models/log.js")
const log = require("../models/log.js")

logs.get("/", (req, res)=>{
    res.status(200).send(logsArr)
})

logs.get("/:id", (req, res)=>{
    const {id} = req.params
    const log = logsArr[id]
    log ? res.send(logsArr[id]) : res.redirect("/")
})

logs.post("/", (req, res)=>{
    const newLog = req.body
    logsArr.push(newLog)
    res.status(200).send(logsArr)
})

module.exports = logs