

'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('user_cars',table =>{
        table.increments();
        table
          .text('user_email')
        table
          .text('user_uid')
        table
          .text('car_type')
        table
          .text('car_make')
        table
          .text('car_model')
        table
          .text('car_nickname')
        table
          .text('car_year') 
          
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_cars')
  };