require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const { baseUrl } = require(__dirname + '/../config/config.js')[env]
const ApiError = require('../utils/api-error')
//const Sequelize = require('sequelize')
//const db = require('../models/index')

const auth_users = async (req, res, next) => {

}

const create_users = async (req, res, next) => {
    const attributes = req.body

    
}

module.exports = {
    auth_users,
    create_users
}
