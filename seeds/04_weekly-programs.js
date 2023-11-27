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
    {
      "id":3,
      "weekly-program_name": 'Cardio Blast',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'High-intensity cardio workouts for fat burning',
    },
    {
      "id":4,
      "weekly-program_name": 'muscular Endurance Training',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'high reps workouts to improve muscular endurance',
    },
    {
      "id":5,
      "weekly-program_name": 'Hypertrophy Beginner Training',
      "weekly-program_author": 'Kswole',
      "weekly-program_details": 'low reps high weight workouts to build size',
    },
  ]);
};