const logsArr = require("../models/logs")
const express = require("express");
const logs = express.Router();

logs.get("/",(req,res) => {

    res.send(logsArr)
})

logs.get("/:id",(req,res) => {
    const {id}=req.params
    if (logsArr[Number(id)]) {
        res.json(logsArr[id]);
      } else {
        res.redirect("/logs")
      }
})

logs.post("/",(req,res)=>{
  logsArr.push(req.body)
  res.send(logsArr)
})

logs.delete("/:id",(req,res)=>{
  const {id}=req.params
  const deletedLog= logsArr.splice(id,1)
  res.status(200).json(deletedLog)
})

module.exports = logs