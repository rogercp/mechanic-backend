'use strict'

/**
 * Define controller
 */

class RootController{
    static index(req, res){
        res.status(200).json("welcome to mechback")
    }

}
  
  /**
   * Export controller
   */

   module.exports = RootController
  