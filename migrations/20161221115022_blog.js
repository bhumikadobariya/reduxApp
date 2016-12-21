exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password_digest').notNullable();
        table.timestamps();
    }),

    knex.schema.createTable('events', function(table){
        table.increments('id').primary();
        table.string('event').notNullable();
        table.integer('user_id')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index();
        table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('events')
  ]);
};
