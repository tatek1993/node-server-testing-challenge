
exports.up = function(knex) {
  return knex.schema.createTable('pops', (tbl) => {
      tbl.increments();
      tbl.string('pop_name', 100)
        .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pops');
};
