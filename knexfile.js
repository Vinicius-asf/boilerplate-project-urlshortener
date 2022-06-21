// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.PG_DEV_CONNECTION_STRING,
    searchPath: ['dev'],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['public'],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
