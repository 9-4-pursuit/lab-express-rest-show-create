const express = require('express');
const logs = express.Router();

const logsArray = require('../models/log');

//validation
// const validateURL = (req, res, next) => {

//     // //middleware 
// // app.use((req, res, next) => {
// //     console.log("this code runs for every request")
// //     next()
// // })
//     if (
//         req.body.url.substring(0, 7) === "htttp://" ||
//         req.body.url.substring(0, 8) === "https://"
//     ){
//         return next();
//     } else {
//         res 
//         .status(400)
//         .send(`Oops, you forgot to start your url with http:// or https://`)
//     }
// }


//index
logs.get("/", (req,res) => {
    res.status(202).json(logsArray)
})

//individual show
logs.get('/:id', async (req, res) => {
// console.log(req.params.id)
const { id } = req.params
const log = logsArray[id]
if (log) {
res.status(202).json(log)
} else {
    res.status(404).redirect("/logs")
}
})


//create 
 logs.post("/", (req, res) => {
    const newLog = req.body
    logsArray.push(newLog)
    res.status(202).json(logsArray)
 })

 //Delete
 logs.delete("/:id", (req, res) => {
    const {id} = req.params;
    if (logsArray[id]) {
        const removedLog = logsArray.splice(id, 1);
        res.status(202).json(removedLog)
    }else {
        res.status(404).json({error: `No log with that ${id}`})
    }
 })

 //Update
 logs.put("/:id", (req, res) => {
    const {id} = req.params;
    const updatedLog = req.body;
    if (logsArray[id]) {
        logsArray[id] = updatedLog
        res.status(202).json(logsArray)
    }else {
        res.status(404).json({error: `No log with that ${id}`})
    }
 })

module.exports = logs