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
      "weekly-program_details": 'A starter program for those new to fitness',
    },
    {
      "id":2,
      "weekly-program_name": 'Advanced Strength Training',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'Intense strength training program for experienced lifters',
    },
    {
      "id":3,
      "weekly-program_name": 'Cardio Blast',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'High-intensity cardio workouts for fat burning',
    },
  ]);
};