'use strict'

/**
 * Dependencies
 */

const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted_access = require('../middleware/restricted_access');
// const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/all')
  .get(UsersController.index)

router.route('/:id')
  .get(UsersController.indexById)

/**
 * Routes
 *   POST /users/auth
 */

router.route('/auth')
  .all(restricted_access)
  .post(UsersController.auth)



router.route('/deactivate')
 .all(restricted)
 .put(UsersController.deactivate)

/**
 * Routes
 *   PUT /users/deactivate
 */


/*
/**
 * Export router
 */

module.exports = router
