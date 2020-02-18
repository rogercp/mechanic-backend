exports.up =  function(knex) {
    return  knex.schema.createTable("posts",table =>{
        table.increments()
        table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE");
        table.integer("like")
            .notNullable()
            .defaultsTo(0);
        table.text("category");
        table.text("url");
        table.text("user_name")
          .references("user_name")
          .inTable("users")
          .onDelete("CASCADE");;
        table.text("post_text");
        table.text("post_date");
        table.timestamps(true, true);
        table.text("user_file_name")
          .references("file_name_profile")
          .inTable("users")
          .onDelete("CASCADE");
      })
    };
    
    exports.down = function(knex) {
      return  knex.schema.dropTableIfExists("posts")
    }