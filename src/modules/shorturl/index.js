const express = require('express');

const getController = require('./controllers/get')
const postController = require('./controllers/post')

const shorturlRouter = express.Router();

shorturlRouter.get('/:id',getController);
shorturlRouter.post('/',postController);

module.exports = shorturlRouter;