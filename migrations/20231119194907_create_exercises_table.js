/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     
    return knex.schema.createTable('exercises', (table) => {
        table.increments('id').primary();
        table.integer('trainer_id').unsigned().references('trainers.id').notNullable();
        table.string('exercise_name').notNullable();
        table.string('video_link').defaultTo('')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('exercises');
};
