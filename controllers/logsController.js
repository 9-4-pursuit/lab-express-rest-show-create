const logs = require('express').Router();
const logsArray = require('../models/logsModel.js');
const logsFilter = require('./logsFilter.js');

//GET: index
logs.get('/', (req, res) => {
  const query = req.query;

  if (Object.keys(query).length > 0) {
    //filter logs
    const filtered = logsFilter(query, logsArray);
    if (filtered.error) {
      res.status(404).json(filtered);
    } else {
      res.status(202).json(filtered);
    }
  } else {
    res.status(202).json(logsArray);
  }
})

//GET: by id
logs.get('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;

  logsArray[arrayIndex]
  ? res.status(202).json(logsArray[arrayIndex])
  : res.status(404).redirect('/logs')
})

//POST: create
logs.post('/', (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);

  res.status(202).json(logsArray);
})

//PUT: update
logs.put('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;
  const updatedLog = req.body;
  const theLog = logsArray[arrayIndex];

  if (theLog) {
    theLog = updatedLog;
    res.status(202).json(theLog);
  } else{
    res.status(404).redirect('/logs');
  }
})

//DELETE: destroy
logs.delete('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;
  const deletedLog = logsArray.splice(arrayIndex, 1);

  logsArray[arrayIndex]
  ? res.status(202).json(deletedLog)
  : res.status(404).redirect('/logs')
})


module.exports = logs;