const express = require('express');
const { cityController: { getCities } } = require('../controllers');
const { cityFilterSortMiddleware, paginationMiddleware } = require('../middlewares');

const cityRouter = express.Router();

cityRouter.get('/', cityFilterSortMiddleware, paginationMiddleware, getCities);

module.exports = cityRouter;
