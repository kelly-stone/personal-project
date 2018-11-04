
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {id: 1, user_id: 1, text:'1th birthday', href:''},
        {id: 2, user_id: 2, text:'2nd birthday', href:''},
        {id: 3, user_id: 3, text:'3rd birthday', href:''}
      ]);
    });
};
