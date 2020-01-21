'use strict'



const express = require('express');
const CommentsController = require('../controllers/CommentsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

const router = express.Router()

///->>/comment...

router.route("/all")
    .get(CommentsController.allPostsComments)

router.route("/")
    .all(restricted_access)
    .post(CommentsController.createComment)
    .all(require_body(["comment_text"]))

router.route("/:id")
    .all(restricted_access)
    .delete(CommentsController.deleteComment)

    router.route("/:id/inc")
    .patch(CommentsController.incrementLikes)

router.route("/:id/dec")
    .patch(CommentsController.decrementLikes)
 

module.exports = router