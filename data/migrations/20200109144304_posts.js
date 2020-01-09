
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
      table.increments();
      table.integer('user_id');
      table.integer('like');
      table.text("category");
      

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
  };
  