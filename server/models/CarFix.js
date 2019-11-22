'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class CarFix{

    static all(){
        
    }

    static findByUserEmail(){
        
    }

    static findById(){
        
    }

    static async create(car_fields){
   
        return db('car_fix').insert(car_fields)
   
    
    }

 }



 
 /**
 * Export model
 */

module.exports = CarFix