'use strict'
exports.up = async function(knex,Promise) {
    await knex.schema.createTable("user_cars",table =>{
        table.increments()
            .primary()
            .unsigned();
        table
            .text("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
        table
          .text("user_uid")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
        table
          .text("car_type");
        table
          .text("car_make");
        table
          .text("car_model");
        table
          .text("car_nickname");
        table
          .text("car_year") ;
        table.timestamps(true, true);
  
  
  
    })
  };
  
  exports.down = async function(knex,Promise) {
    await knex.schema.dropTable("user_cars")
  };
  