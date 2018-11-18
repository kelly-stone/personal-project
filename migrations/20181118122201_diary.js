
exports.up = function(knex, Promise) {
    return knex.schema.createTable('diary', function (table) {
        table.increments('id').primary(),
        table.string('child_name'),
        table.string('diary')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('diary')
};
