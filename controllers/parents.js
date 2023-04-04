require('dotenv').config()

const { baseUrl } = require(`../config/${process.env.NODE_ENV}`)
const ApiError = require('../utils/api-error')
const db = require('../models')
const Parent = db.parents
const Op = db.Sequelize.Op

const create_parents = async (req, res, next) => {
    const data = JSON.stringify(req.body)
    console.log(data)

    const parent = {
        name: req.body.name,
        status: req.body.status,
        erp_id: req.body.erp_id,
        erp_code: req.body.erp_code
    }

    Parent.create(parent)
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
