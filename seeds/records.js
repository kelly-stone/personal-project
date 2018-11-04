
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {id: 1, user_id:1, text:'1 year old'},//, date:'16/06/2016'},
        {id: 2, user_id:1, text:'2 years old'},//, date:'16/06/2017'},
        {id: 3, user_id:1, text:'3 years old'}//, date:'16/06/2018'}
      ]);
    });
};
