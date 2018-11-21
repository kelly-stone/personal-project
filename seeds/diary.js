
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('diary').del()
    .then(function () {
      // Inserts seed entries
      return knex('diary').insert([
        {id: 1, child_name: 'Jadon', diary:"16 JUN 2015, Jadon was born in wellington hospital! weighted 3.04kg and 51cm, and took 5 hours to be burn.", URL:"",image:"./IMG_0055.jpg"},  
        {id: 2, child_name: 'Jadon', diary:"The first time rolled over by himself was about 6 months old, first time sat up by him self was about 8 months old, and first time stood up was 12 months old.", URL:"", image:"./IMG_0166.jpg"},
        {id: 3, child_name: 'Jadon', diary:"Jadon's first Christmas", image:"/IMG_0754.jpg"},
        {id: 4, child_name: 'Jadon', diary:"16 JUN 2016 Jadon 1st birthday", URL:"", image:"./IMG_2176.jpg"},
      ]);
    });
};
