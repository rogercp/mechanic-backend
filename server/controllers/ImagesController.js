'use strict'
const Image = require('../models/Image')

/**
 * Define controller
 */

class ImagesController{
    static async index(req, res){
        try{
           
            const images = await Image.findByCarId(req.params.id);

            res.status(200).json(images)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }


    }
    static async create(req, res){
        try{
            
            const images = await Image.create({
                car_id:req.params.id,
                file_name:req.body.file_name

            });
            res.status(201).json(images)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }


    }
    static async createFix(req, res){
        try{
            
            const images = await Image.create({
                car_fix_id:req.params.id,
                file_name:req.body.file_name

            });
            res.status(201).json(images)
            
        }catch(err){
            res.status(500).json({error:{message:"Internal Service Error "}})
        }


    }
}
  
  /**
   * Export controller
   */

   module.exports = ImagesController
  