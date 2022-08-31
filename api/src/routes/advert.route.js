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
const { paginationMiddleware, advertFilterSortMiddleware, idValidationMiddleware } = require('../middlewares');

const advertRouter = Router();

advertRouter.get('/', advertFilterSortMiddleware, paginationMiddleware, getAdvertList);
advertRouter.post('/', postAdvert);
advertRouter.get('/:id', idValidationMiddleware, getAdvertItem);
advertRouter.get('/:id/:prop', idValidationMiddleware, getAdvertItemProperty);
advertRouter.delete('/:id', idValidationMiddleware, deleteAdvertItem);
advertRouter.patch('/:id', idValidationMiddleware, patchAdvertItem);
module.exports = advertRouter;
