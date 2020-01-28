
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
      table.increments();
      table.integer('user_id');
      table.integer('like');
      table.text("category");
      table.text('user_email');
      table.text('user_name');
      table.text('post_text');
      table.text('post_date');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
  };
  