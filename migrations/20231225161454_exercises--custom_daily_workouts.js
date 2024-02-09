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
    return knex.schema.dropTable('exercises--custom_daily_workouts')
};
