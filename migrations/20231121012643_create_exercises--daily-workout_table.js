/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('exercises--daily-workout', (table) => {
        table.integer('exercise_id').unsigned().references('exercises.id');
        table.integer('daily-workout_id').unsigned().references('daily-workouts.id');
      })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('exercises--daily-workout');
};
