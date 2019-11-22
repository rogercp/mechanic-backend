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
 *   GET/DEL'/car_fix/:id'
 */

router.route("/:id")
    .all(restricted_access)
    .delete(CarFixController.delete)


/**
 * Routes
 *   POST 
 */

router.route("/:id")
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