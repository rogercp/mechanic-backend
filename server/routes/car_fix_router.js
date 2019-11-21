'use strict'

/**
 * Dependencies
 */

const express = require('express');
const CarFixController = require('../controllers/CarFixController.js');
const restricted_access = require('../middleware/restricted_access');
// const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET 
 */



/**
 * Routes
 *   POST 
 */

router.route("/")
    .all(restricted_access)
    .get(CarFixController.index)
    .post(CarFixController.create)




/**
 * Routes
 *   PUT 
 */


/*
/**
 * Export router
 */

module.exports = router