const express = require('express');
const logs = express.Router();
const logsData = require('../models/log.js');

logs.get('/', (_, response) => {
    response.status(202).json(logsData)
})

logs.get('/:id', (request, response) => {
    const { id } = request.params
    const log = logsData[id]

    log ? response.status(202).json(logsData[id]) : response.redirect(404)
})

logs.post('/', (request, response) => {
    const newLog = request.body;
    logsData.push(newLog)
    response.status(202).json(logsData)
})

logs.delete('/:id', (request, response) => {
    const { id } = request.params;

    if (logsData[id]) {
        const dataDelete = logsData.splice(id, 1);
        response.status(202).json(dataDelete)
    }
    else {
        response.status(404).json({error: `Log with id ${id} not found` })
    }
})

module.exports = logs;