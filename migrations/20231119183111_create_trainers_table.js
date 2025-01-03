/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('trainers', (table) => {
        table.increments('id').primary();
        table.string('trainer_avatar');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone').notNullable().unique();
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
    return knex.schema.dropTable('trainers');

};
