/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('exercises--custom_daily_workouts', (table) => {
        table.increments('id').primary();
        table.integer('exercise_id').unsigned().references('exercises.id');
        table.integer('daily_workout_id').unsigned().references('custom_daily_workouts.id');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('custom_daily_workouts')
};
