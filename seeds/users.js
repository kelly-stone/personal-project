
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Kelly'},
        {id: 2, username: 'Will'},
        {id: 3, username: 'Ben'}
      ]);
    });
};
