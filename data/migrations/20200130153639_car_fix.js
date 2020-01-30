'use strict'
exports.up = async function(knex,Promise) {
    await knex.schema.createTable("car_fix",table =>{
        table.increments()
        .primary()
        .unsigned();
      table.integer("car_id")
          .references("id")
          .inTable("user_cars")
          .onDelete("CASCADE");
      table.boolean("fix_not_maintenence");
      table.text("fix");
      table.text("fix_description");
      table.text("fix_date");
      table.integer("fix_price");
      table.text("fixed_by");
      table.timestamps(true, true);
  
  
  
    })
  };
  
  exports.down = async function(knex,Promise) {
    await knex.schema.dropTable("car_fix")
  };
  