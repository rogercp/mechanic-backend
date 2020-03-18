'use strict'

/**
 * Dependencies
 */


const express = require('express');
const RootController = require('../controllers/RootController');


const router = express.Router()

///->>/...

 router.route('/')
    .get(RootController.index)


 

 module.exports = router

 