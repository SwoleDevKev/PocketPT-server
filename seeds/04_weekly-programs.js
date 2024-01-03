/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('programs--weekly-programs').del();
  await knex('weekly-programs').del();
  await knex('weekly-programs').insert([
    {
      "id":1,
      "weekly-program_name": 'Beginner Workout',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'A first week onbarding program for those new to fitness',
    },
    {
      "id":2,
      "weekly-program_name": 'stability and balance Training',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'setting the stage for injury prevention',
    },
  ]);
};