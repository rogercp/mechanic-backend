'use strict'

/**
 * Dependencies
 */

const express = require('express');
const CarsController = require('../controllers/CarsController.js');
const ImagesController = require('../controllers/ImagesController.js')
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET/POST /cars
 */

router.route("/all")
    .all(restricted_access)
    .get(CarsController.all)



/**
 * Routes
 *   POST 
 */


router.route("/")
    .all(restricted_access)
    .get(CarsController.index)
    .all(require_body(["car_type"]))
    .post(CarsController.create)


/**
 * Routes
 *   GET/PUT 
 */

router.route("/:id")
.all(restricted_access)
.get(CarsController.indexById)
.delete(CarsController.delete)



 router.route("/:id/images")
  .all(restricted_access)
  .get(ImagesController.index)
  .all(require_body(["file_name"]))
  .post(ImagesController.create)

 /**
 * Routes
 *   DEL  
 */
/*
/**
 * Export router
 */

module.exports = router
