require('dotenv').config()

const express = require('express')
const router = express.Router({ mergeParams: true })
const ops = require('../controllers/clients')

/**
 * @swagger
 * tags:
 *  name: Clients
 *  description:
 */

//create new client(s)
/**
 * @swagger
 * /clients:
 *  post:
 *      summary: use to create one or more clients
 *      tags: [Clients]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: 
 */
router.post('/', ops.create_clients)


//read client(s)


//update client


//delete client


module.exports = router;
