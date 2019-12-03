"use strict";

/**
 * Dependencies
 */

const db = require("../../data/dbConfig");

/**
 * Define model
 */

 class Image {
 
  static create(image) {
    return db('images').insert(image)
  }

  static findByCarId(car_id) {
    return db("images")
      .where("car_id", car_id)
  }

  static findByCarFixId(car_fix_id) {
    return db("images")
      .where("car_fix_id", car_fix_id)
  }

}

/**
 * Export model
 */

module.exports = Image