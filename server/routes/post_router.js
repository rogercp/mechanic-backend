'use strict'


const express = require('express');
const PostsController = require('../controllers/PostsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');



const router = express.Router()

///->>/post...

router.route("/all")
    .get(PostsController.allPosts)

router.route("/")
    .all(restricted_access)
    .get(PostsController.allUserPosts)

router.route("/")
    .all(restricted_access)
    .post(PostsController.create)
    .all(require_body(["post_text"]))

router.route("/:id")
    .all(restricted_access)
    .delete(PostsController.delete)

router.route("/inc/:id")
    .all(restricted_access)
    .patch(PostsController.incrementLikes)

router.route("/dec/:id")
    .all(restricted_access)
    .patch(PostsController.decrementLikes)

router.route("/search")
    .post(PostsController.filterPosts)
    
    




module.exports = router
