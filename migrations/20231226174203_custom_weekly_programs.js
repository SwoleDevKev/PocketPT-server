/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('custom_weekly_program', (table) => {
        table.increments('id').primary();
        table.integer('trainer_id').unsigned().references('trainers.id').notNullable();
        table.string('weekly_program_name').notNullable();
        table.string('weekly_program_details').nullable();
        table.integer('monday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('tuesday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('wednesday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('thursday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('friday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('saturday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.integer('sunday').unsigned().references('custom_daily_workouts.id').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
