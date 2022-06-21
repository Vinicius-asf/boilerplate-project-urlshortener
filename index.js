const createServer = require('./server');

const port = process.env.PORT || 3000;

const app = createServer()

var listener = app.listen(port, () => {
  console.log('Listening on port ' + listener.address().port);
});
