const createShortUrl = require('../../services/createShortUrl')

module.exports = async (req, res) => {
  const longUrl = req.body.url;
  try {
    const createdShortUrl = await createShortUrl(longUrl);
    res.status(201).json(createdShortUrl);
  } catch (error) {
    res.status(400).json({"error":error.message})
  }
}