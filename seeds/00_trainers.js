
const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

  const hashedPassword = bcrypt.hashSync('password');
  // Deletes ALL existing entries
  await knex('exercises--custom_daily_workouts').del()
  await knex ('exercises').del()
  await knex('custom_daily_workouts').del()
  await knex('custom_weekly_program').del()
  await knex('programs').del()
  await knex('clients').del()
  await knex('trainers').del();
  await knex('trainers').insert([
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      phone: '999-999-9999',
      email:'johndoe@gmail.com',
      password: hashedPassword
    },
   
  ]);
};
