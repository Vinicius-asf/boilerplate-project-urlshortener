const {development,production} = require('../../knexfile')

const credentials = process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? production : development

const pg = require('knex')(credentials)

module.exports = pg;