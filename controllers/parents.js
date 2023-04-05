require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const { baseUrl } = require(__dirname + '/../config/config.js')[env]
const ApiError = require('../utils/api-error')
const Sequelize = require('sequelize')

const create_parents = async (req, res, next) => {
    const data = JSON.stringify(req.body)
    console.log(data)

    const attributes = {
        name: req.body.name,
        status: req.body.status,
        erp_id: req.body.erp_id,
        erp_code: req.body.erp_code
    }

    Parent.create(attributes)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            next(ApiError.badRequest(err))
            console.log(err)
        })
}

const find_parents = async (req, res, next) => {
    const parent = Parent.findAll
}

module.exports = {
    create_parents,
}
