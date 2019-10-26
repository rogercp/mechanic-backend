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