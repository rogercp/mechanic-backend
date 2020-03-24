'use strict'


const express = require('express');
const CarsController = require('../controllers/CarsController.js');
const ImagesController = require('../controllers/ImagesController.js')
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

const router = express.Router()

///->>/cars...

router.route("/all")
    .all(restricted_access)
    .get(CarsController.all)


router.route("/")
    .all(restricted_access)
    .get(CarsController.index)
    .all(require_body(["car_type"]))
    .post(CarsController.create)


router.route("/:id")
.all(restricted_access)
.get(CarsController.indexById)
.delete(CarsController.delete)

router.route('/update/:id')
.all(restricted_access)
.put(CarsController.updateCar)

 router.route("/:id/images")
  .all(restricted_access)
  .get(ImagesController.index)
  .all(require_body(["file_name"]))
  .post(ImagesController.create)



module.exports = router
