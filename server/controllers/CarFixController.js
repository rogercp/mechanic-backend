'use strict'

/**
 * Define controller
 */
const CarFix = require('../models/CarFix')
const Car = require('../models/Car')


class CarFixController{
    static async index(req, res){
        try{
          const car_fixes = await CarFix.all(req.params.id)  
          res.status(201).json(car_fixes)
        }catch(err){
 
        }
     }
 
     static async create(req, res) {
      try{
        const car_fix = await CarFix.create({
          car_id:req.params.id,
          fix_not_maintenence:req.body.fix_not_maintenence,
          fix:req.body.fix,
          fix_description:req.body.fix_description,
          fix_date:req.body.fix_date,
          fix_price:req.body.fix_price
        });
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
  