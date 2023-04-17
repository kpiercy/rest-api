require('dotenv').config()

module.exports = {
    development: {
        database: process.env.DEV_DB,
        username: process.env.DEV_DB_USER,
        password: process.env.DEV_DB_PASS,
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        dialect: process.env.DEV_DB_TYPE,
        pool: {
            max: parseInt(process.env.DB_POOL_MAX),
            min: parseInt(process.env.DB_POOL_MIN),
            acquire: parseInt(process.env.DB_POOL_ACQUIRE),
            idle: parseInt(process.env.DB_POOL_IDLE),
        },
        baseUrl: {
            url: 'http://localhost:5000/api/v1',
        },
        authProvider: {
            url: process.env.DEV_AUTH_ISSUER,
            jwks: process.env.DEV_AUTH_JWKS,
        },
    },
    production: {
        database: process.env.PROD_DB,
        username: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASS,
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        dialect: process.env.PROD_DB_TYPE,
        pool: {
            max: parseInt(process.env.DB_POOL_MAX),
            min: parseInt(process.env.DB_POOL_MIN),
            acquire: parseInt(process.env.DB_POOL_ACQUIRE),
            idle: parseInt(process.env.DB_POOL_IDLE),
        },
        baseUrl: {
            url: 'http://localhost:5000/api/v1',
        },
        authProvider: {
            url: process.env.PROD_AUTH_ISSUER,
            jwks: process.env.PROD_AUTH_JWKS,
        },
    },
}
