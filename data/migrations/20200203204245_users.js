
exports.up =  function(knex) {
    return  knex.schema.createTable("users",users =>{
    users.increments()
    users
      .string("email",128)
      .notNullable()
      .unique();
    users
      .string("uid")
      .notNullable()
      .unique();
    users.text("user_name");
    users.string("file_name_profile");
    users.timestamps(true, true);
    users.string("UserNameFlagFLipped")
      .defaultTo(false);

    })
  };
  
  exports.down = function(knex) {
    return  knex.schema.dropTableIfExists("users")
  }