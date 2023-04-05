'use strict'
require('dotenv').config()

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var basename = path.basename(__filename)
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.js')[env]
var db = {}

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    var sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.host,
            port: config.port,
            dialect: config.dialect,
            pool: {
                max: parseInt(config.pool.max),
                min: parseInt(config.pool.min),
                acquire: parseInt(config.pool.acquire),
                idle: parseInt(config.pool.idle),
            },
        }
    )
}

fs.readdirSync(__dirname + '/rest')
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        )
    })
    .forEach((file) => {
        var model = require(path.join(__dirname + '/rest', file))
        (
            sequelize,
            Sequelize.DataTypes,
        )
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize
    .authenticate()
    .then(() => {
        console.log('DATABASE: ' + env + ' db connected successfully')
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error)
    })

module.exports = db