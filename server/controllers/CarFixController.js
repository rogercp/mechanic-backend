'use strict'


const CarFix = require('../models/CarFix')
const Car = require('../models/Car')


class CarFixController {

  static async index(req, res) {
    try {
      const car_fixes = await CarFix.all(req.params.id)
      res.status(201).json(car_fixes)
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }


  static async create(req, res) {

   

    try {

      const car_fix = await CarFix.create(req.body, req.params);
      res.status(201).json(car_fix);
    } catch (err) {
      return res
        .status(500)
        .json({
          error: {
            message: "Internal Server Error"
          }
        });
    }
  }


  static async delete(req, res) {

    try {


      await CarFix.delete(req.params.id)

      res.status(201).json({
        message: "Successfully deleted a car fix"
      });
    } catch (err) {

      return res.status(500).json({
        error: {
          message: "Internal Server Error"
        }
      });
    }
  }

  
  static async updateCarFix(req, res) {
    function parseDate(date){
      var m = date.split(",")[0]
      return m
    }
    console.log(req.body,req.params,"this is the update carFix")
    try {
        await CarFix.updateCarFix({
        
        "fix":req.body.fix,
        "fix_description":req.body.fix_description,
        "fix_date":parseDate(req.body.fix_date),
        "fix_price":req.body.fix_price,
          
        },req.params.id)

        res.status(200).json({
            message: 'Successfully updated your username.'
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: {
                message: 'Internal Server Error'
            }
        })
    }
}

}

/**
 * Export controller
 */

module.exports = CarFixController