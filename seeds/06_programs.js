/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  await knex('programs').del();
  await knex('programs').insert([
    {
      "id": 1,
      program_name: 'Athlete program',
      program_author: 'Kswole',
      program_details: 'A program for experienced athletes',
    },
    {
      "id": 2,
      program_name: 'Strength and conditioning program',
      program_author: 'Kswole',
      program_details: 'Intense strength training program for experienced lifters',
    },
    {
      "id": 3,
      program_name: 'Spartan Program',
      program_author: 'Kswole',
      program_details: 'High-intensity cardio workouts, functional training and strength all mixed in one similar to a crossfit style',
    },
  ]);
};