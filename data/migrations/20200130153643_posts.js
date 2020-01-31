'use strict'
exports.up = async function(knex,Promise) {
    await knex.schema.createTable("posts",table =>{
        table.increments()
        .primary()
        .unsigned();
      table.integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.integer("like");
      table.text("category");
      table.text("user_email")
        .references("email")
        .inTable("users")
        .onDelete("CASCADE");
      table.text("user_name");
      table.text("post_text");
      table.text("post_date");
      table.timestamps(true, true);
  
  
  
    })
  };
  
  exports.down = async function(knex,Promise) {
    await knex.schema.dropTable("posts")
  };
  