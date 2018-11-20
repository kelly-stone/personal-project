
exports.up = function(knex, Promise) {
    return knex.schema.table('diary', function (table) {
        table.string('URL');
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.table('diary', function(t) {
        table.dropColumn('URL');

    })
};
