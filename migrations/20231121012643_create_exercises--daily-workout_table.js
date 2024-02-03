/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('exercises--daily-workout', (table) => {
        table.increments('id').primary();
        table.integer('exercise_id').unsigned().references('exercises.id');
        table.integer('daily-workout_id').unsigned().references('daily-workouts.id');
        table.integer('reps').nullable();
        table.integer('sets').nullable();
        table.integer('weight').nullable();
        table.string('note').defaultTo('');
        table.integer('rest_time').nullable()
      })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('exercises--daily-workout');
};
