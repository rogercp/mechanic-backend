
exports.up = function(knex) {
  return knex.schema.createTable("users", table=>{
      table.increment();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
