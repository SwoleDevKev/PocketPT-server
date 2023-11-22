/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('programs', (table) => {
        table.increments('id').primary();
        table.string('program_name').notNullable();
        table.string('program_author').notNullable();
        table.string('program_details').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      })
      .createTable('exercises', (table) => {
        table.increments('id').primary();
        table
          .integer('program_id')
          .unsigned()
          .references('id')
          .inTable('programs')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.string('exercise_name').notNullable();
        table.string('note');
        table.integer('reps').notNullable();
        table.integer('sets').notNullable();
        table.integer('rest_time')
        table.string('video_link')
        table.string('status').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('programs').dropTable('exercises');
};
