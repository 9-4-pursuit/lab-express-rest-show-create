const app = require('express')()
const logsController = require('./controllers/logsController')
const cors = require('cors')


app.use(cors())

app.use('/logs', logsController)

app.get('/',(_, res)=>{
    res.send('Greetings from the Captains log')
})

app.get('*', (_, res)=>{
    res.status(404).send('Page not Found')
})


module.exports = app