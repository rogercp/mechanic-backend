'use strict'



const express = require('express');
const CommentsController = require('../controllers/CommentsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');

const router = express.Router()

///->>/comment...

router.route("/:id")
    .get(CommentsController.allPostsComments)

router.route("/:id")
    .all(restricted_access)
    .post(CommentsController.createComment)
    .all(require_body(["comment_text"]))

router.route("/:id")
    .all(restricted_access)
    .delete(CommentsController.deleteComment)

router.route("/inc/:id")
    .all(restricted_access)
    .patch(CommentsController.incrementLikes)

router.route("/dec/:id")
    .all(restricted_access)
    .patch(CommentsController.decrementLikes)


module.exports = router