'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'fake20@gmail.com', uid: '123451346789011', username: 'Miles'}, 
        {email: 'fake40@gmail.com', uid: '123451346789012', username: 'Stewart'},
        {email: 'fake30@gmail.com', uid: '123451346789013', username: 'Roger'},
        {email: 'fake50@gmail.com', uid: '123451346789014', username: 'Carl'},
        {email: 'fake10@gmail.com', uid: '123451346789016', username: 'James'},
      ]);
    });
};
