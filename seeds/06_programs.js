/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('programs').del();
  await knex('programs').insert([
    {
      "id": 1,
      program_name: 'Beginner Workout',
      program_author: 'Kswole',
      program_details: 'A starter program for those new to fitness',
    },
    {
      "id": 2,
      program_name: 'Advanced Strength Training',
      program_author: 'Kswole',
      program_details: 'Intense strength training program for experienced lifters',
    },
    {
      "id": 3,
      program_name: 'Cardio Blast',
      program_author: 'Kswole',
      program_details: 'High-intensity cardio workouts for fat burning',
    },
  ]);
};