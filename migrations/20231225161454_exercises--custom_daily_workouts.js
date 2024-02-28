/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('exercises--custom_daily_workouts', (table) => {
        table.increments('id').primary();
        table.integer('trainer_id').unsigned().references('trainers.id').notNullable();
        table.integer('exercise_id').unsigned().references('exercises.id');
        table.integer('daily_workout_id').unsigned().references('custom_daily_workouts.id');
        table.string('reps').defaultTo('')
        table.string('sets').defaultTo('')
        table.string('weight').defaultTo('')
        table.string('note').defaultTo('');
        table.string('rest_time').defaultTo('')
      })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('exercises--custom_daily_workouts')
};
