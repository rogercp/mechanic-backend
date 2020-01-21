'use strict'



const express = require('express');
const CarFixController = require('../controllers/CarFixController.js');
const restricted_access = require('../middleware/restricted_access');
const ImagesController = require('../controllers/ImagesController.js');
const require_body = require('../middleware/require_body');


const router = express.Router()

///->>/car_fix...

router.route("/:carId/:carFixId")
    .all(restricted_access)
    .delete(CarFixController.delete)


router.route("/:id")
    .all(restricted_access)
    .get(CarFixController.index)
    .post(CarFixController.create)
    .delete(CarFixController.delete)


router.route("/:id/car_fix_images")
    .all(restricted_access)
    .get(ImagesController.indexFixImage)
    .all(require_body(["file_name"]))
    .post(ImagesController.createFixImage)


module.exports = router