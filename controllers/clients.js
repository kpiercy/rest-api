require('dotenv').config()

const sequelize = require('sequelize')
const { baseUrl } = require(`../config/${process.env.NODE_ENV}`)
const ApiError = require('../utils/api-error')
const Client = require('../models/client')

const create_clients = async (req, res, next) => {
    const data = req.body
    
    try{
        const clients = await Client.create(data)

        res.status(201).json(clients.id)
    }catch (err) {
        next(ApiError.badRequest(err))
    }
}

const find_clients = async (req, res, next) => {
    const client = Client.findAll
}

module.exports = {
    create_clients
}