'use strict'

/**
 * Dependencies
 */

const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted = require('../middleware/restricted_access');
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

/**
 * Routes
 *   POST /users/auth
 */

router.route('/auth')
.all(restricted)
.post(UsersController.auth)

/**
 * Routes
 *   PUT /users/deactivate
 */


/*
/**
 * Export router
 */

module.exports = router
