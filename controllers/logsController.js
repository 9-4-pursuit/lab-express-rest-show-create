const express = require("express")

const logs = express.Router()

let logsArr = require("../models/log.js")
const log = require("../models/log.js")

logs.get("/", (req, res) => {
    const query = req.query
    if (query.order === "asc") {
        logsArr = logsArr.sort((a, b) => {
            let x = a.captainName.toLocaleLowerCase()
            let y = b.captainName.toLocaleLowerCase()
            if (x > y) { return 1 }
            if (x < y) { return -1 }
            return 0
        })
    }
    res.status(200).send(logsArr)
})

logs.get("/:id", (req, res) => {
    const { id } = req.params
    const log = logsArr[id]
    log ? res.send(logsArr[id]) : res.redirect("/")
})

logs.post("/", (req, res) => {
    const newLog = req.body
    logsArr.push(newLog)
    res.status(200).send(logsArr)
})

logs.delete("/:id", (req, res) => {
    const { id } = req.params
    const deletedLog = logsArr.splice(id, 1)
    logsArr[id] ? res.status(200).json({ success: true, deletedLog }) : res.redirect("*")
})

logs.put("/:id", (req, res) => {
    const { id } = req.params
    const updatedLog = req.body
    if (logsArr[id]) {
        logsArr[id] = updatedLog
        res.status(200).json(logsArr[id])
    } else {
        res.redirect("*")
    }
})

// BONUS



module.exports = logs