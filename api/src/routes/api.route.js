const express = require('express');

const advertRouter = require('./advert.route');
const userRouter = require('./user.route');
const categoryRouter = require('./category.route');

const apiRouter = express.Router();

apiRouter.use('/adverts', advertRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/categories', categoryRouter);

module.exports = apiRouter;
