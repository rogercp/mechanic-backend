'use strict'


const express = require('express');
const PostsController = require('../controllers/PostsController.js');
const restricted_access = require('../middleware/restricted_access');
const require_body = require('../middleware/require_body');
const ImagesController = require('../controllers/ImagesController.js');



const router = express.Router()

///->>/post...

router.route("/all")
    .get(PostsController.allPosts)


router.route("/search")
    .post(PostsController.filterPostsForSearch)
    
router.route("/filterCategory")
    .post(PostsController.filterByCategory)
    
// router.route("/")
//     .all(restricted_access)
//     .get(PostsController.allUserPosts)

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

router.route("/fetchPostLikes/:id")
    .all(restricted_access)
    .get(PostsController.fetchPostLikes)

router.route("/:id/post_images")
    .get(ImagesController.indexPostImage)
    .all(require_body(["file_name"]))
    .post(ImagesController.createPostImage)

router.route('/image/:id')
    .all(restricted_access)
    .delete(PostsController.deletePostImage)
  
router.route("/postProfileImg/:id")
    .get(PostsController.indexByIdPost)




module.exports = router
