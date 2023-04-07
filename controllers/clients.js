require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const { baseUrl } = require(__dirname + '/../config/config.js')[env]
const ApiError = require('../utils/api-error')
const Sequelize = require('sequelize')
const db = require('../models/index')

const create_clients = async (req, res, next) => {
    const attributes = req.body

    await db.Client.bulkCreate(attributes, {
        validate: true,
        fields: [
            'gid',
            'id',
            'ParentId',
            'name',
            'status',
            'erp_id',
            'erp_parent_id',
            'erp_code',
            'erp_alt_code',
            'erp_pos_code',
            'type',
            'terms',
            'taxable',
            'tax_exempt',
            'postage_cost',
            'postage_sell',
            'aio_invoice',
            'cost_only',
            'bulk_bill'
        ],
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            next(ApiError.badRequest(err))
            console.log(err)
        })
}

const find_clients = async (req, res, next) => {
    const client = Client.findAll
}

module.exports = {
    create_clients,
}
