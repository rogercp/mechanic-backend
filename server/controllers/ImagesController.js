'use strict'
const Image = require('../models/Image')

/**
 * Define controller
 */

class ImagesController{
    static index(req, res){
        try{
           
            res.status(200).json(users)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }



    }
    static create(req, res){
        try{
            
            
            res.status(200).json(users)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }



    }
}
  
  /**
   * Export controller
   */

   module.exports = ImagesController
  