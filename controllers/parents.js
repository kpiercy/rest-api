require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const { baseUrl } = require(__dirname + '/../config/config.js')[env]
const ApiError = require('../utils/api-error')
const Sequelize = require('sequelize')
const db = require('../models/index')

const create_parents = async (req, res, next) => {

    const attributes = req.body

    await db.Parent.bulkCreate(attributes, {
        validate: true,
        fields: ['gid', 'id', 'name', 'status', 'erp_id', 'erp_code']
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            next(ApiError.badRequest(err))
            console.log(err)
        })
}

const find_parents = async (req, res, next) => {

    // const name = req.query.name
    // const erpid = req.query.erpid
    // const erpcode = req.query.erpcode

    const parent = await db.Parent.findAll()
}

module.exports = {
    create_parents,
    find_parents
}
