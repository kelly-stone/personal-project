
exports.up = function(knex, Promise) {
    return knex.schema.createTable('records', (table)=>{
        table.increments('id').primary()
        table.integer('user_id')
        table.string('text')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('records')
};
