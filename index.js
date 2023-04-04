require('dotenv').config()

//PACKAGES
const express = require('express')
const { version } = require('./package.json')
//const cors = require('cors')
const helmet = require('helmet')
//const pubip = require('express-ip')
//const logger = require('morgan')
//const fs = require('fs-extra')
//const path = ('path')
//const fileStreamRotator = require('file-stream-rotator')
//const ejs = require('ejs')
const db = require('./models')
db.sequelize.sync()

//APP
const app = express()

//MIDDLEWARE
//const authenticateToken = require('./middleware/authenticate')
const apiErrorHandler = require('./utils/api-error-handler')
const swagger = require('./utils/swagger')
const ApiError = require('./utils/api-error')

//CHECK LOG DIRECTORY

//LOG STREAM

//APP CONFIG
//app.set('views', 'views')
//app.set('view engine', 'ejs')
app.use(express.json())
//app.use(cors())
app.use(helmet())
app.use(express.static('public'))
//app.use(logger('combined', { stream: rotatingLogStream }))
//app.use(logger('dev'))
app.use(apiErrorHandler)

//ROUTES
const parentRoutes = require('./routes/parents')
const clientRoutes = require('./routes/clients')
const serviceRoutes = require('./routes/services')

//ENDPOINTS
swagger(app, process.env.PORT)
app.use('/parents', parentRoutes)
app.use('/clients', clientRoutes)
app.use('/services', serviceRoutes)

//ERROR HANDLING


//STARTUP
let port = process.env.PORT || 5000
app.listen(port, async () => {
    console.log('Server running')
    console.log(` PORT: ${port}`)
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
    //await connectDb()
})






