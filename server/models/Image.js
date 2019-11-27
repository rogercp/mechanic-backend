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

  static findByCaseId(car_id) {
    return db("images")
      .where("car_id", car_id)
  }


}

/**
 * Export model
 */

module.exports = Image