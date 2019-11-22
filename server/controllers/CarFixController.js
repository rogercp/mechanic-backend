'use strict'

/**
 * Define controller
 */
const CarFix = require('../models/CarFix')
const Car = require('../models/Car')


class CarFixController{
    static async index(req, res){
      console.log("ayyy")
        try{
          const car_fixes = await CarFix.all(req.params.id)  
          res.status(201).json(car_fixes)
        }catch(err){
 
        }
     }
 
     static async create(req, res) {
    
      try{
        
        const car_fix = await CarFix.create(req.body,req.params);
  
        res.status(201).json(car_fix);
      }catch(err){
        return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
      }
      }
     

   static delete(req, res){
    try{

    }catch(err){

    }
 }

}
  
  /**
   * Export controller
   */

   module.exports = CarFixController
  