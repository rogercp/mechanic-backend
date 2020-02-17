'use strict'


const Car = require('../models/Car')


class CarsController {

  static async all(req, res) {
    try {
      const cars = await Car.allCars();

      return res.status(200).json(cars);
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

  static async index(req, res) {

    try {


      const cars = await Car.all(req.body.email);

      return res.status(200).json(cars);
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

  static async indexById(req, res) {
    const id = req.params.id;
    try {
      const carById = await Car.findById(id);
      return res.status(200).json(carById);

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
      const new_car = await Car.create(req.body);

      res.status(201).json(new_car);
    } catch (err) {
      res.status(500).json({
        error: {
          message: "Internal Server Error"
        }
      });
    }
  }



  static async delete(req, res) {
    try {
      await Car.delete(req.params.id, req.body.email);

      return res.status(200).json({
        message: "Successfully deleted a car"
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

module.exports = CarsController