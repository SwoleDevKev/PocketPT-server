
const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

  const hashedPassword = bcrypt.hashSync('password');

  const tables = [
    'exercises--custom_daily_workouts',
    'exercises',
    'custom_daily_workouts',
    'custom_weekly_program',
    'programs',
    'clients',
    'trainers'
  ];

  for (const table of tables) {
    const exists = await knex.schema.hasTable(table);
    if (exists) {
      await knex(table).del();
    }
  }


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
