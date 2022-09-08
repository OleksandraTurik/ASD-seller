const express  = require('express');
const bodyParser = require('body-parser');
const { categoryController:
    { createCategory, getCategories, deleteCategory, getCategoryById },
} = require('../controllers');
const { singleUploadMiddleware, idValidationMiddleware } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', idValidationMiddleware, getCategoryById);
categoryRouter.post(
    '/',
    bodyParser.urlencoded({ extended: true }),
    singleUploadMiddleware('image'),
    createCategory,
);
categoryRouter.delete('/:id', idValidationMiddleware, deleteCategory);

module.exports = categoryRouter;
