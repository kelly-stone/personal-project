
exports.up = function(knex, Promise) {
    return knex.schema.createTable('child', (table)=>{
    table.increments('id').primary()
    table.string('child_name')
    table.string('DOB')
    table.string('gender')
    table.integer('height')
    table.integer('weight')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('child')
};
