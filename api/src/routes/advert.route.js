const { Router } = require('express');
const {
  advertController: {
    getAdvertList,
    postAdvert,
    getAdvertItem,
    deleteAdvertItem,
    patchAdvertItem,
    getAdvertItemProperty,
  },
} = require('../controllers');
const { paginationMiddleware, advertFilterSortMiddleware } = require('../middlewares');

const advertRouter = Router();

advertRouter.get('/', advertFilterSortMiddleware, paginationMiddleware, getAdvertList);
advertRouter.post('/', postAdvert);
advertRouter.get('/:id', getAdvertItem);
advertRouter.get('/:id/:prop', getAdvertItemProperty);
advertRouter.delete('/:id', deleteAdvertItem);
advertRouter.patch('/:id', patchAdvertItem);
module.exports = advertRouter;
