require('dotenv').config()
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/./config/config.js')[env]


//PACKAGES
const express = require('express')
const { version } = require('./package.json')
//const cors = require('cors')
const helmet = require('helmet')
//const pubip = require('express-ip')
const logger = require('morgan')
const fs = require('fs-extra')
//const path = ('path')
const fileStreamRotator = require('file-stream-rotator')
//const ejs = require('ejs')
const db = require('./models')

//APP
const app = express()


//MIDDLEWARE
//const authenticateToken = require('./middleware/authenticate')
const apiErrorHandler = require('./utils/api-error-handler')
const swagger = require('./utils/swagger')
const ApiError = require('./utils/api-error')


//ROUTES
const parentRoutes = require('./routes/parents')
const clientRoutes = require('./routes/clients')
const serviceRoutes = require('./routes/services')


//CHECK LOG DIRECTORY
const logsFolder = __dirname + '/logs'
fs.existsSync(logsFolder) || fs.mkdirSync(logsFolder)


//LOG STREAM
const rotatingLogStream = fileStreamRotator.getStream({
  filename: `${logsFolder}/access-%DATE%.log`,
  frequency: 'daily',
  verbose: false,
  date_format: 'YYYY-MM-DD',
  max_logs: 45, //Keep for 45 days
})


//APP CONFIG
//app.set('views', 'views')
//app.set('view engine', 'ejs')
app.use(express.json())
//app.use(cors())
app.use(helmet())
app.use(express.static('public'))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))
app.use(logger('combined', { stream: rotatingLogStream }))
//app.use(logger('dev'))
app.use(apiErrorHandler)


//ENDPOINTS
swagger(app, process.env.PORT)
app.use('/parents', parentRoutes)
app.use('/clients', clientRoutes)
app.use('/services', serviceRoutes)


//404 HANDLING
app.use((req, res, next) => {
    next(ApiError.notFound())
})


//STARTUP
let port = process.env.PORT || 5000
app.listen(port, async () => {
    console.log('SERVER: running')
    console.log(`PORT: ${port}`)
    console.log(`NODE_ENV: ${env}`)
})






