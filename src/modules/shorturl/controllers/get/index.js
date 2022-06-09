const getUrl = require('../../services/getUrl');

module.exports = async (req, res) => {
  const urlId = req.params.id;
  if (/\D/.test(urlId)){
    res.json({"error":"Wrong format"})
  } else {
    try {
      const shortUrl = await getUrl(urlId);
      res.redirect(shortUrl);
    } catch (error) {
      res.status(400).json({"error":error.message});
    }
  }
}