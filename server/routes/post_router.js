'use strict'

/**
 * Dependencies
 */

const express = require('express');
const PostsController = require('../controllers/PostsController.js');
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

router.route("/:id/inc")
    .all(restricted_access)
    .patch(PostsController.incrementLikes)

router.route("/:id/dec")
    .all(restricted_access)
    .patch(PostsController.decrementLikes)


 /**
 * Routes
 *   DEL  
 */
/*
/**
 * Export router
 */

module.exports = router
