const errorHandler = require('../helpers/error-handler');

function errorHandlerMiddleware(err, req, res, _) {
    if (!err.statusCode) err.statusCode = 500;
    errorHandler(res, err, err.statusCode);
}

module.exports = errorHandlerMiddleware;
