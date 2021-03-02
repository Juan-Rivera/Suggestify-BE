
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
    })
    .createTable('savedSongs', tbl => {
        tbl.increments()
        tbl.string('album_art', 255).notNullable()
        tbl.string('album_name', 255).notNullable()
        tbl.string('artist', 255).notNullable()
        tbl.string('title', 255).notNullable()
        tbl.string('song_id', 255).notNullable()
        tbl.integer('user_id').unsigned().notNullable().references('users.id')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('savedSongs')
    .dropTableIfExists('users');
};
