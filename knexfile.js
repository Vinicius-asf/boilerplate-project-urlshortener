// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.PG_DEV_CONNECTION_STRING,
      ssl:'no-verify'
    },
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
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl:'no-verify'
    },
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
