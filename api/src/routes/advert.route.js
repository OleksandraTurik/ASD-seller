const express = require('express');
const bodyParser = require('body-parser');
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
advertRouter.post('/', bodyParser.urlencoded({ extended: true }), multipleUploadMiddleware('images', 10), postAdvert);
advertRouter.get('/:id', idValidationMiddleware, getAdvertItem);
advertRouter.get('/:id/:prop', idValidationMiddleware, getAdvertItemProperty);
advertRouter.delete('/:id', idValidationMiddleware, deleteAdvertItem);
advertRouter.patch('/:id', express.json(), idValidationMiddleware, patchAdvertItem);
advertRouter.patch(
    '/:id/images',
    idValidationMiddleware,
    bodyParser.urlencoded({ extended: true }),
    multipleUploadMiddleware('images', 10),
    patchAdvertPhoto,
);
module.exports = advertRouter;
