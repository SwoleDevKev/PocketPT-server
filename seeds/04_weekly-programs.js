/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('custom_weekly_program').del();
  await knex('custom_weekly_program').insert([
    {
      "id":1,
      "trainer_id":1,
      "weekly_program_name": 'Beginner Workout',
      "weekly_program_details": 'A first week onbarding program for those new to fitness',
    },
    {
      "id":2,
      "trainer_id":1,
      "weekly_program_name": 'stability and balance Training',
      "weekly_program_details": 'setting the stage for injury prevention',
    },
  ]);
};