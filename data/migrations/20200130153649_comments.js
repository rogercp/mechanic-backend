'use strict'
exports.up = async function(knex,Promise) {
    await knex.schema.createTable("comments",table =>{
        table.increments()
        .primary()
        .unsigned();
      table.integer("post_id")
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE");
      table.integer("user_id");
      table.integer("like");
      table.text("user_email");
      table.text("user_name");
      table.text("comment_text");
      table.timestamps(true, true);
  
  
    })
  };
  
  exports.down = async function(knex,Promise) {
    await knex.schema.dropTable("comments")
  };
  