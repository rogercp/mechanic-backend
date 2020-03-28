'use strict'

const db = require('../../data/dbConfig')



 class CarFix{

    static all(id){
        return db('car_fix').where("car_id",id)
    }

    static findByUserEmail(){
        
    }

    // static findById(){
    //     return db('car_fix').where("id",car_id).first()
    // }

    static async create(car_fields,car_field_id){
      
     function parseDate(date){
        var m = date.split(",")[0]
        return m
      }
        
        if (
            process.env.NODE_ENV === "production" 
          ){
            const [ids] = await db("car_fix").insert(
               {
                car_id: car_field_id,
                fix_not_maintenence: car_fields.fix_not_maintenence,
                fix: car_fields.fix,
                fix_description: car_fields.fix_description,
                fix_date: parseDate(car_fields.fix_date),
                fix_price: car_fields.fix_price,
                fixed_by:car_field_fixed_by
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
                fix_date: parseDate(car_fields.fix_date),
                fix_price:car_fields.fix_price
               
             });
       
             const car_fix = await db("car_fix")
               .where({ id: id })
               .first();
             return car_fix;
          }

    }

    static async delete(id) {
      return await db("car_fix").where({ id: id}).del()
    }


  static updateCarFix(update,id) {

    return  db('car_fix').where("id",id).update(update)
    
  }
 }



 
 /**
 * Export model
 */

module.exports = CarFix