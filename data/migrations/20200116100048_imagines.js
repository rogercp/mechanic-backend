'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('imagines', table => {
    table.increments();
    table.integer('car_id');
    table.text("file_name");
    table.integer('car_fix_id');
    table.integer('user_id');
    table.integer('post_id');
    table.integer('comment_id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('imagines');
};