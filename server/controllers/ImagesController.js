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
    static async indexFixImage(req, res){
        try{
           
            const images = await Image.findByCarFixId(req.params.id);
            console.log(images, "this is the image")
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
    static async createFixImage(req, res){
        console.log(req.params, req.body, "this i the post for carfix image")
        try{
            
            const images = await Image.createFixImage({
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
  

//    'use strict'

// exports.up = function(knex) {
//   return knex.schema.createTable('images', table => {
//     table.increments();
//     table.integer('car_id');
//     table.text("file_name");
//     table.integer('car_fix_id');
//     table.integer('user_id');
//     table.integer('post_id');
//     table.integer('comment_id');
//   })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTableIfExists('images');
// };
