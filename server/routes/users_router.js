'use strict'


const express = require('express');
const UsersController = require('../controllers/UsersController');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');


const router = express.Router()

///->>/users...

router.route('/all')
  .get(UsersController.index)

router.route('/:id')
  .get(UsersController.indexById)

router.route('/auth')
  .all(restricted_access)
  .post(UsersController.auth)


router.route('/deactivate')
 .all(restricted_access)
 .put(UsersController.deactivate)

 router.route('/username/:id')
  .get(UsersController.getUserName)

 router.route('/update/:id')
 .all(restricted_access)
 .put(UsersController.updateUserName)

 router.route('/updateinitially/:id')
 .all(restricted_access)
 .post(UsersController.updateUserNameInitially)


router.route('/image/:id')
  .all(restricted_access)
  .get(UsersController.indexImage)
  .all(require_body(["file_name"]))
  .post(UsersController.createImage)
 

router.route('/imagee/:id')
  .all(restricted_access)
  .delete(UsersController.deleteUserImage)


module.exports = router
