const db_enviroments = require('../../knexfile')

const credentials = process.env.NODE_ENV && process.env.NODE_ENV === 'development' ? db_enviroments.development : db_enviroments.production

const pg = require('knex')(credentials)

module.exports = pg;