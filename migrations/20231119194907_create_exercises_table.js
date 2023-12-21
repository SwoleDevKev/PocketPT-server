/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     
    return knex.schema.createTable('exercises', (table) => {
        table.increments('id').primary();
        table
          .integer('program_id')
          .unsigned()
          .references('id')
          .inTable('programs')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.string('exercise_name').notNullable();
        table.string('note').defaultTo('');
        table.integer('reps').notNullable();
        table.integer('sets').notNullable();
        table.integer('weight').nullable()
        table.integer('rest_time').nullable()
        table.string('video_link').defaultTo('')
        table.string('status').defaultTo('notDone');
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
