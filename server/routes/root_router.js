'use strict'

/**
 * Dependencies
 */


const express = require('express');
const RootController = require('../controllers/RootController');


const router = express.Router()

/**
 * Routes
 *   GET /
 */

 router.route('/')
    .get(RootController.index)


 /**
 * Export router
 */

 module.exports = router

 