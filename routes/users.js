require('dotenv').config()

const express = require('express')
const router = express.Router({ mergeParams: true })
const gaurd = require('express-jwt-permissions')()
const ops = require('../controllers/users')

/**
 * @swagger
 * tags:
 *  name: Users
 *  description:
 */

//authorize user
/**
 * @swagger
 * /users/authorize:
 *  post:
 *      summary: use to authorize user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref:
 */
router.post(
    '/authorize',
    ops.auth_users
)

//create new user(s)
/**
 * @swagger
 * /users:
 *  post:
 *      summary: use to create one or more users
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref:
 */
router.post(
    '/',
    gaurd.check(['create:users', 'is:admin']),
    ops.create_users
)

//read user(s)
router.get(
    '/:id',
    gaurd.check(['read:users']),
    ops.read_user
)

//update user

//delete user

module.exports = router
