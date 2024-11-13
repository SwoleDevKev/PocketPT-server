/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clients', (table) => {
        table.increments('id').primary();
        table.integer('trainer_id').unsigned().references('trainers.id');
        table.integer('program_id').unsigned().references('programs.id');
        table.string('client_avatar');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone');
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('icon').nullable().defaultTo(null);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};
