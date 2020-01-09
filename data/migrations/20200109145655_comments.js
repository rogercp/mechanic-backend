
exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
      table.increments();
      table.integer('user_id');
      table.integer('like');
      table.text('user_email');
      table.text('user_name');
      table.text('comment');
      
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments');
  };