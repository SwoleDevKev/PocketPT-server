/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('weekly-program--daily-workout').del();
  await knex('weekly-program--daily-workout').insert([
    
    {
      "weekly-program_id": 2,
      "daily-workout_id": 1,
    },
    {
      "weekly-program_id": 2,
      "daily-workout_id": 2,
    },
    {
      "weekly-program_id": 2,
      "daily-workout_id": 3,
    },
    
  ]);
};