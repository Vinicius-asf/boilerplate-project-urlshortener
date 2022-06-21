const ShortUrlRepository = require('../../repositories')

module.exports = async (id) => {
  const acquiredUrl = await ShortUrlRepository.get(id);
  if (acquiredUrl){
    return acquiredUrl;
  } else {
    throw new Error('No short URL found for the given input')
  }
}
