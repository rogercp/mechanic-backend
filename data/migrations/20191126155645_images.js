'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
    table.increments();
    table.integer('car_id');
    table.text("file_name");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('images');
};
