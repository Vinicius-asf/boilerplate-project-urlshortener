const { DatabaseError } = require('pg/lib');
const pg = require('../../../database');

class ShortUrlRepository{
  constructor(){
    this.connection = pg;
  }

  async create (url) {
    try {
      const createResponse = await this.connection('url').insert({url:url}).returning(['id','url']);
      const createdUrl = createResponse[0]
      return {'original_url':createdUrl.url, 'short_url':createdUrl.id};
    } catch (error) {
      try {
        const searchResponse = await this.connection('url').select(['id','url']).where({url}).first();
        return {'original_url':searchResponse.url, 'short_url':searchResponse.id};
      } catch (error) {
        throw new DatabaseError("Cannot create or find data with url "+url)
      }
    }
  }

  async get (id) {
    try {
      const searchResponse = await this.connection('url').select('url').where({id});first();
      return searchResponse.url;
    } catch (error) {
      throw new DatabaseError("Cannot find data with id "+id.toString())
    }
  }
}

module.exports = ShortUrlRepository