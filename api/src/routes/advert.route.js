const express = require('express');
const {
  advertController: {
    getAdvertList,
    postAdvert,
    getAdvertItem,
    deleteAdvertItem,
    patchAdvertItem,
    getAdvertItemProperty,
    patchAdvertPhoto,
  },
} = require('../controllers');
const {
  paginationMiddleware,
  advertFilterSortMiddleware,
  idValidationMiddleware,
  multipleUploadMiddleware,
} = require('../middlewares');

const advertRouter = express.Router();

advertRouter.get('/', advertFilterSortMiddleware, paginationMiddleware, getAdvertList);
advertRouter.post('/', express.json(), postAdvert);
advertRouter.get('/:id', idValidationMiddleware, getAdvertItem);
advertRouter.get('/:id/:prop', idValidationMiddleware, getAdvertItemProperty);
advertRouter.delete('/:id', idValidationMiddleware, deleteAdvertItem);
advertRouter.patch('/:id', express.json(), idValidationMiddleware, patchAdvertItem);
advertRouter.patch('/:id/photos', idValidationMiddleware, multipleUploadMiddleware('images', 10), patchAdvertPhoto);
module.exports = advertRouter;
