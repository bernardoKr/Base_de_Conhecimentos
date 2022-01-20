exports.up = function (knex, Promise) {
  return knex.schema.createTable("articles", (table) => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('description').notNull()
      table.string('imageUrl', 1000)
      table.binary('content').notNull()
      table.integer('userId').references('id').inTable('users')
      table.integer('categories').notNull()
  });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('articles')
};
