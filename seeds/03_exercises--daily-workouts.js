/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercises--daily-workout').del();
  await knex('exercises--daily-workout').insert([
    {
      "daily-workout_id": 1,
      "exercise_id": 1,
    },
    {
      "daily-workout_id": 1,
      "exercise_id": 9 ,
    },
    {
      "daily-workout_id": 1,
      "exercise_id":11 ,
    },
    {
      "daily-workout_id": 1,
      "exercise_id":13 ,
    },
    {
      "daily-workout_id": 1,
      "exercise_id":16 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":3 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":6 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":8 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":10,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":4 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":13 ,
    },
    {
      "daily-workout_id": 2,
      "exercise_id":15 ,
    },
    {
      "daily-workout_id": 3,
      "exercise_id":2 ,
    },
    {
      "daily-workout_id": 3,
      "exercise_id":5 ,
    },
    {
      "daily-workout_id": 3,
      "exercise_id":7,
    },
    {
      "daily-workout_id": 3,
      "exercise_id":12 ,
    },
    {
      "daily-workout_id": 3,
      "exercise_id":17 ,
    },

  ]);
};