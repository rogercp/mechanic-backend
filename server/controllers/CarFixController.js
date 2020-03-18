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

}

/**
 * Export controller
 */

module.exports = CarFixController