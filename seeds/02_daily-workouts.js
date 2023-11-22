/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('daily-workouts').del();
  await knex('daily-workouts').insert([
    {
      "id": 1,
      "daily-workout_name": 'Chest and Back',
      "daily-workout_details": 'solid upper-body workout',
    },
    {
      "id":2,
      "daily-workout_name": 'Abs and Arms',
      "daily-workout_details": 'finishing up our upperbody for the week',
    },
    {
      "id": 3,
      "daily-workout_name": 'Legs',
      "daily-workout_details": 'It must be done',
    },
  ]);
};