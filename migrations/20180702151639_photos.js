
exports.up = function(knex, Promise) {
    return knex.schema.createTable('photos', (table)=>{
        table.increments('id').primary()
        table.integer('user_id')
        table.string('text')
        table.string('href')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('photos')
};
