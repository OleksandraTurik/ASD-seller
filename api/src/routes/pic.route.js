const express = require('express');

const {
  picController: { getAdvertImg, getCategoryImg },
} = require('../controllers');

const picRouter = express.Router();

picRouter.get('/:key', getAdvertImg);
picRouter.get('/category/:file', getCategoryImg);

module.exports = picRouter;
