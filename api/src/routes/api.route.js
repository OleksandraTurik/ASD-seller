const express = require('express');

const advertRouter = require('./advert.route');
const userRouter = require('./user.route');

const apiRouter = express.Router();

apiRouter.use('/adverts', advertRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
