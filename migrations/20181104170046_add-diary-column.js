
exports.up = function(knex, Promise) {
    return knex.schema.table('child', function (table) {
        table.string('Diary')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('child', function (table) {
        table.dropColumn('Diary')
      })
};
