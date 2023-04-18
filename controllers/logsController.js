const logs = require('express').Router()
const bodyParser = require('body-parser')
const logsArray = require('../models/log')

const jsonParser = bodyParser.json()

logs.get('/', (req, res) => {
  if (req.query.order === 'asc') {
    logsArray.sort((a, b) => {
      const nameA = a.title.toUpperCase()
      const nameB = b.title.toUpperCase()
      if (nameA > nameB) {
        return 1
      } else if (nameA < nameB) {
        return -1
      }
      return 0
    })
    res.json(logsArray)
  } else if (req.query.order === 'des') {
    const descendingLogs = [...logsArray].sort((a, b) => {
      const nameA = a.title.toUpperCase()
      const nameB = b.title.toUpperCase()
      if (nameA > nameB) {
        return -1
      } else if (nameA < nameB) {
        return 1
      }
      return 0
    })
    res.json(descendingLogs)
  } else if (req.query.mistakes === 'true') {
    console.log(req.query.mistakes)
    const mistakesFilter = logsArray.filter(log => log.mistakesWereMadeToday)
    res.json(mistakesFilter)
  } else if (req.query.mistakes === 'false') {
    const mistakesFilter = logsArray.filter(log => !log.mistakesWereMadeToday)
    res.json(mistakesFilter)
  } else if (req.query.lastCrisis === 'gt10') {
    const crisisFilter = logsArray.filter(log => log.daysSinceLastCrisis > 10)
    res.json(crisisFilter)
  } else if (req.query.lastCrisis === 'gte20') {
    const crisisFilter = logsArray.filter(log => log.daysSinceLastCrisis >= 20)
    res.json(crisisFilter)
  } else if (req.query.lastCrisis === 'lte5') {
    const crisisFilter = logsArray.filter(log => log.daysSinceLastCrisis <= 5)
    res.json(crisisFilter)
  } else {
    res.json(logsArray)
  }
})
logs.get('/:id', (req, res) => {
    const { id } = req.params
    if(!logsArray[id]){
        res.redirect('/logs')
    }
    res.send(logsArray[id])
})

logs.post('/', jsonParser, (req, res) => {
  const newLog = req.body
  logsArray.push(newLog)
  res.status(202).json(logsArray)
})
logs.put('/:id/edit', jsonParser,(req,res)=>{
    if(logsArray[req.params.id]){
        logsArray[req.params.id] = req.body
        res.status(200).redirect('/logs')
    }else{
        res.status(404).json({error:'Not Found'})
    }
})
logs.delete('/:id',(req,res)=>{
    if(logsArray[req.params.id]){
        const deletedLog = logsArray[req.params.id]
        logsArray.splice(req.params.index,1)
        res.status(200).json(deletedLog)
    }else{
        res.status(404).json({error:'Not Found'})
    }

})
module.exports = logs
