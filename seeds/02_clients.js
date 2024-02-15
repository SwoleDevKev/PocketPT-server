
const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

  const hashedPassword = bcrypt.hashSync('password');
  // Deletes ALL existing entries
  await knex('clients').insert([
    {
      id: 1,
      trainer_id: 1,
      first_name: 'client',
      last_name: 'Demo',
      phone: '123-456-7890',
      email:'clientdemo@gmail.com',
      password: hashedPassword
    },
   
  ]);
};
