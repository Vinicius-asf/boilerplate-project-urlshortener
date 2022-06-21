// init project
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const apiRouter = require('./src/modules');

const app = express();

const createServer = () => {
  app.use(cors({optionsSuccessStatus: 200}));
  
  app.use('/public', express.static(`${process.cwd()}/public`));
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())
  
  app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

  app.get('/api/hello', function(req, res) {
    res.json({ greeting: 'hello API' });
  });
  
  app.use('/api',apiRouter)
  return app;
}

module.exports = createServer;