const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3000
// Middleware setup
app.use(express.json())

// Connection DB
const connectionDB = require('./DB/connection')
connectionDB()

// Include your routes here
const { clientRouter, userRouter } = require('./router/allRoutes')
app.use(clientRouter, userRouter)

const request = require('request')
const CronJob = require('cron').CronJob;

// new CronJob('*/10 * * * *', function () {
//     request('https://wish-4a54.onrender.com/', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log('Wake up the server')
//         }
//     })
// }, null, true, 'America/New_York')

// Start server
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))