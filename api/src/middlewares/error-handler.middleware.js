const errorHandler = require('../helpers/error-handler');

// eslint-disable-next-line no-unused-vars
function errorHandlerMiddleware(err, req, res, _) {
  if (!err.statusCode) err.statusCode = 500;
  errorHandler(res, err, err.statusCode);
}

module.exports = errorHandlerMiddleware;
