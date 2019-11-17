'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class Car{

   static async all(email){
   
      if(email){
         return db('user_cars').where("user_email, email");

      }else{
         return db("user_cars");
      }
    
   }    

    static async create(car_fields){
      if (
         process.env.NODE_ENV === "production" 
       ){
         const [ids] = await db("user_cars").insert(
            {
               user_email: car_fields.email,
               user_uid: car_fields.uid,
               car_type: car_fields.car_type,
               car_make: car_fields.car_make,
               car_model: car_fields.car_model,
               car_nickname: car_fields.car_nickname,
               car_year: car_fields.car_year,
          
            },
            ["id"]
          );
    
          const new_car = await db("user_cars")
            .where({ id: ids.id })
            .first();
    
          return new_car;
       }else{
         const [id] = await db("user_cars").insert({
            user_email: car_fields.email,
            user_uid: car_fields.uid,
            car_type: car_fields.car_type,
            car_make: car_fields.car_make,
            car_model: car_fields.car_model,
            car_nickname: car_fields.car_nickname,
            car_year: car_fields.car_year,
            
          });
    
          const new_car = await db("user_cars")
            .where({ id: id })
            .first();
          return new_car;
       }
     
    
    }

 }



 
 /**
 * Export model
 */

module.exports = Car