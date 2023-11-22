/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('programs--weekly-programs', (table) => {
        table.integer('program_id').unsigned().references('programs.id');
        table.integer('weekly-program_id').unsigned().references('weekly-programs.id');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('programs--weekly-programs');
};
