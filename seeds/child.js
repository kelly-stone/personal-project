
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('child').del()
    .then(function () {
      // Inserts seed entries
      return knex('child').insert([
        {id: 1, child_name: 'Jadon', DOB: "16/06/2015", gender:"male"},
        {id: 2, child_name: 'Zoe', DOB: "16/11/2015", gender:"famale"},
        {id: 3, child_name: 'Ryan', DOB: "16/07/2015", gender:"male"}
      ]);
    });
};
