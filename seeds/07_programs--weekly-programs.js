/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('programs--weekly-programs').del();
  await knex('programs--weekly-programs').insert([
    
    {
      "weekly-program_id": 2,
      "program_id": 1, 
    },
    
  ]);
};