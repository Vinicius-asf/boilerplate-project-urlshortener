// Regex from https://tutorial.eyehunts.com/js/url-validation-in-javascript-example-code/
var urlRegex =  /^(http|https):\/\/(www\.)[^ "]+$/;

module.exports = (url) => {
  return urlRegex.test(url);
}