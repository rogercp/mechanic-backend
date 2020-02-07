exports.up =  function(knex) {
    return  knex.schema.createTable("imagines",table =>{
    table.increments()
    table.text("file_name");
    table.integer("car_id")
        .references("id")
        .inTable("user_cars")
        .onDelete("CASCADE");
    table.integer("car_fix_id")
        .references("id")
        .inTable("car_fix")
        .onDelete("CASCADE");
    table.integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    table.integer("post_id")
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE");
    table.integer("comment_id")
        .references("id")
        .inTable("comments")
        .onDelete("CASCADE");
    table.timestamps(true, true);
  
    })
  };
  exports.down = function(knex) {
    return  knex.schema.dropTableIfExists("imagines")
  }



