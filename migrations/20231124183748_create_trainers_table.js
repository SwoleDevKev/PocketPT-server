/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('trainers', (table) => {
        table.increments('id').primary();
        table.integer('program_id').unsigned().references('programs.id');
        table.string('trainer_avatar');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone');
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
