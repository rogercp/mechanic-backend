"use strict";



const db = require("../../data/dbConfig");


 class Image {
 
  static create(image) {
    return db('imagines').insert(image)
  }

  static createFixImage(image) {
    return db('imagines').insert(image)
  }

  static createUserImage(image) {
    return db('imagines').insert(image)
  }

  static findByCarId(car_id) {
    return db("imagines")
      .where("car_id", car_id)
  }

  static findByCarFixId(car_fix_id) {
    return db("imagines")
      .where("car_fix_id", car_fix_id)
  }

  static fetchUserImage(user_id){
    return db("imagines")
      .where("user_id", user_id)
  }
  static deleteUserImage(id){
    return db("imagines")
      .where("id", id).del()
  }

  static async checkIfImageExistsForUser(){

    const firstImage = await db("imagines")
        .where("user_id").first()
        .first();
    return firstImage;
    
    

  }

}

/**
 * Export model
 */

module.exports = Image