exports.up =  function(knex) {
    return  knex.schema.createTable("car_fix",table =>{
        table.increments()
        table.integer("car_id")
            .references("id")
            .inTable("user_cars")
            .onDelete("CASCADE");
        table.boolean("fix_not_maintenence");
        table.text("fix");
        table.text("fix_description");
        table.text("fix_date");
        table.integer("fix_price");
        table.text("fixed_by");
        table.timestamps(true, true);
    
    
    
      })
    };
    
   
    exports.down = function(knex) {
      return  knex.schema.dropTableIfExists("car_fix")
    }