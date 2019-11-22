'use strict'

/**
 * Define controller
 */
const CarFix = require('../models/CarFix')
const Car = require('../models/Car')


class CarFixController{
    static index(req, res){
        try{
 
        }catch(err){
 
        }
     }
 
     static async create(req, res) {
      try{
        const car_fix = await CarFix.create({

        });
        res.status(201).json(car_fix);
      }catch(err){
        return res
        .status(500)
        .json({ error: { message: "Internal Server Error" } });
      }
      }
     

     static indexById(req, res){
      try{

      }catch(err){

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
  