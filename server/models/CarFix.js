'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class CarFix{

    static all(id){
        console.log("ayyymore")
        return db('car_fix').where("car_id",id)
    }

    static findByUserEmail(){
        
    }

    // static findById(){
    //     return db('car_fix').where("id",car_id).first()
    // }

    static async create(car_fields,car_field_id){
        
        
        if (
            process.env.NODE_ENV === "production" 
          ){
            const [ids] = await db("car_fix").insert(
               {
                car_id: car_field_id,
                fix_not_maintenence: car_fields.fix_not_maintenence,
                fix: car_fields.fix,
                fix_description: car_fields.fix_description,
                fix_date: car_fields.fix_date,
                fix_price: car_fields.fix_price
               },
               ["id"]
             );
       
             const car_fix = await db("car_fix")
               .where({ id: ids.id })
               .first();
             return car_fix;
          }else{
            const [id] = await db("car_fix").insert({
                car_id:car_field_id.id,
                fix_not_maintenence:car_fields.fix_not_maintenence,
                fix:car_fields.fix,
                fix_description:car_fields.fix_description,
                fix_date:car_fields.fix_date,
                fix_price:car_fields.fix_price
               
             });
       
             const car_fix = await db("car_fix")
               .where({ id: id })
               .first();
             return car_fix;
          }



    }

 }



 
 /**
 * Export model
 */

module.exports = CarFix