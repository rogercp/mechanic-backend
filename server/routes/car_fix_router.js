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
 *   GET/DEL'/car_fix/carid/fixid'
 */

router.route("/:carId/:carFixId")
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
    .delete(CarFixController.delete)


router.route("/:id/images")
  .all(restricted_access)
  .get(ImagesController.index)
  .all(require_body(["file_name"]))
  .post(ImagesController.createFix)

/**
 * Routes
 *   PUT 
 */


/*
/**
 * Export router
 */

module.exports = router