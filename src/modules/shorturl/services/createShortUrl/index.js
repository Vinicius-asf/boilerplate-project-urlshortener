const ShortUrlRepository = require('../../repositories')
const urlValidation = require('../../../../functions/urlValidation');

module.exports = async (url) => {
  if (urlValidation(url)){
    const shortenedUrl = await ShortUrlRepository.create(url)
    return shortenedUrl;
  } else {
    throw new Error('invalid url');
  }
}
