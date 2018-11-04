
exports.seed = function(knex, Promise) {
  return knex('child').del()
    .then(function () {
      return knex('child').insert([
        {id: 1, child_name: 'Jadon', DOB:"16/06/2015", gender: 'male', height: 99, weight: 16},
        {id: 2, child_name: 'Zoe',  DOB:"01/10/2015", gender: 'female', height: 90, weight: 11},
         {id: 3, child_name: 'Ryan', DOB:"10/11/2015", gender: 'male', height: 95, weight: 14}
      ]);
    });
};
