/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('programs', (table) => {
        table.increments('id').primary();
        table.integer('trainer_id').unsigned().references('trainers.id').notNullable();
        table.string('program_name').notNullable();
        table.string('program_details').nullable();
        table.integer('week_1').unsigned().references('custom_weekly_program.id').nullable();
        table.integer('week_2').unsigned().references('custom_weekly_program.id').nullable();
        table.integer('week_3').unsigned().references('custom_weekly_program.id').nullable();
        table.integer('week_4').unsigned().references('custom_weekly_program.id').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('programs');
};
