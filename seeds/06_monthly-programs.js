/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('programs').insert([
    {
      "id":1,
      "trainer_id":1,
      "program_name": 'Beginner Workout Phase1 OPT Model',
      "program_details": 'Setting a base for inexperienced client to build strength and stability foundation',
    },
    {
      "id":2,
      "trainer_id":1,
      "program_name": 'Beginner Workout Phase2 OPT Model',
      "program_details": 'setting the stage for injury prevention',
    },
  ]);
};