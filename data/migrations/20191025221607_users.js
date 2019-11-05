
exports.up = function(knex) {
  return knex.schema.createTable("users", users=>{
      users
        .increments();
      users
      .string("email",128)
        .notNullable()
        .unique();
      users
      .string("username")
        .notNullable()
        .unique()
      users
      .string("uid")
        .notNullable()
        .unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
