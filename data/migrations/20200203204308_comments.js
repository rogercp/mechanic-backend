exports.up =  function(knex) {
    return  knex.schema.createTable("comments",table =>{
        table.increments()
        table.integer("post_id")
          .references("id")
          .inTable("posts")
          .onDelete("CASCADE");
        table.integer("user_id");
        table.integer("like")
            .notNullable()
            .defaultsTo(0);;
        table.text("user_email");
        table.text("user_name");
        table.text("comment_text");
        table.timestamps(true, true);
    
    
      })
    };
    
    exports.down = function(knex) {
      return  knex.schema.dropTableIfExists("comments")
    }