
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
      first_name: 'Robert',
      last_name: 'Wisley',
      phone: '229-944-7863',
      email:'robertwilsey@gmail.com',
      password: hashedPassword
    },
    {
      id: 2,
      trainer_id: 1,
      first_name: 'Adam',
      last_name: 'Fields',
      phone: '315-462-9349',
      email:'adamfields@gmail.com',
      password: hashedPassword
    }
   
  ]);
};
