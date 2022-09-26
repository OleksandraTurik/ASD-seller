const isIdValid = require('../helpers/is-id-valid');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/error-handler');

function idValidationMiddleware(req, res, next) {
  try {
    const { id } = req.params;
    if (!isIdValid(id)) throw new StatusError(400, 'This ID is not valid');
    next();
  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports = idValidationMiddleware;
