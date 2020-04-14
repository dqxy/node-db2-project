// the .up() describes the changes to the database schema
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
      // a primary key, called id that autoincrements
      tbl.increments("id");
  
      // an index make searching for a value in a column a LOT faster
      tbl.integer("vin", 17).notNullable();
      tbl.string("make", 255).notNullable();
      tbl.string("model", 255).notNullable();
      tbl.integer("mileage", 7).notNullable();
      tbl.string("transmission ", 255);
      tbl.string("title", 255);

    });
  };
  
  // he .down() describes how to undo the changes
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
  };
  
  // knex migrate:make add_cars
  // delete the database file
  // knex migrate:latest
  // knex migrate:rollback to undo the changes
  