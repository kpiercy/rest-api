require('dotenv').config()

const express = require('express')
const router = express.Router({ mergeParams: true })
const gaurd = require('express-jwt-permissions')()
const ops = require('../controllers/parents')

/**
 * @swagger
 * tags:
 *  name: Parents
 *  description:
 */

//create new parent(s)
/**
 * @swagger
 * /parents:
 *  post:
 *      summary: use to create one or more parents
 *      tags: [Parents]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref:
 */
router.post('/', gaurd.check([
    'create:parents',
    'is:admin'
]), ops.create_parents)

//read parent(s)

//update parent

//delete parent

module.exports = router
