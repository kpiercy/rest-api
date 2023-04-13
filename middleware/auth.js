require('dotenv').config()
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')

var jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 300,
            jwksUri: config.authProvider.jwks
        }),
    audience: config.baseUrl.url,
    issuer: config.authProvider.url,
    algorithms: ['RS256'],
})

module.exports = jwtCheck
