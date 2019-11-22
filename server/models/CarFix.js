'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class CarFix{

    static all(car_id){
        return db('car_fix').where("id",car_id)
    }

    static findByUserEmail(){
        
    }

    // static findById(){
    //     return db('car_fix').where("id",car_id).first()
    // }

    static async create(car_fields){
        return db('car_fix').insert(car_fields)
    }

 }



 
 /**
 * Export model
 */

module.exports = CarFix