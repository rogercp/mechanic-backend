'use strict'

/**
 * Dependencies
 */

const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted = require('../middleware/restricted');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/')
  .get(UsersController.index)

/**
 * Routes
 *   POST /users/auth
 */


/**
 * Routes
 *   PUT /users/deactivate
 */


/*
/**
 * Export router
 */

module.exports = router
