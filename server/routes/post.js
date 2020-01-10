'use strict'

/**
 * Dependencies
 */

const express = require('express');
const PostController = require('../controllers/PostController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET/POST
 */

router.route("/all")
    .all(restricted_access)
    



 /**
 * Routes
 *   DEL  
 */
/*
/**
 * Export router
 */

module.exports = router
