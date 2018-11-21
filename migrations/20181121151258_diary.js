
exports.up = function(knex, Promise) {
    return knex.schema.table('diary', function (table) {
        table.string('image');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('diary', function(t) {
        table.dropColumn('image');
    })
};
