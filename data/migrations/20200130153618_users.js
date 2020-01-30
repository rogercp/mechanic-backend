

'use strict'
exports.up = async function(knex,Promise) {
  await knex.schema.createTable("users",table =>{
    table.increments()
    .primary()
    .unsigned();
  table
    .string("email",128)
    .notNullable()
    .unique();
  table
    .string("uid")
    .notNullable()
    .unique();
  table.text("user_name");
  table.timestamps(true, true);


  })
};

exports.down = async function(knex,Promise) {
  await knex.schema.dropTable("users")
}