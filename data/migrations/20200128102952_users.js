
'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('users',table =>{
        table.increments();
        table
          .string('email',128)
          .notNullable()
          .unique();
        table
          .string('uid')
          .notNullable()
          .unique();
        table.text("user_name");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  };