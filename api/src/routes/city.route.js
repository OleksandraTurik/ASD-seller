const express = require('express');
const {
  cityController: { getCities, getCityById },
} = require('../controllers');
const { cityFilterSortMiddleware, paginationMiddleware, idValidationMiddleware } = require('../middlewares');

const cityRouter = express.Router();

cityRouter.get('/', cityFilterSortMiddleware, paginationMiddleware, getCities);
cityRouter.get('/:id', idValidationMiddleware, getCityById);
module.exports = cityRouter;
