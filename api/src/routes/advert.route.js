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

const advertRouter = Router();

advertRouter.get('/', getAdvertList);
advertRouter.post('/', postAdvert);
advertRouter.get('/:id', getAdvertItem);
advertRouter.get('/:id/:prop', getAdvertItemProperty);
advertRouter.delete('/:id', deleteAdvertItem);
advertRouter.patch('/:id', patchAdvertItem);
module.exports = advertRouter;
