const tokenService = require('../service/Token.service');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/error-handler');

module.exports = function (req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new StatusError(401, 'User is unauthorized');
    }
    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) {
      throw new StatusError(401, 'User is unauthorized');
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      throw new StatusError(401, 'User is unauthorized');
    }
    req.user = userData;
    next();
  } catch (e) {
    errorHandler(res, e);
  }
};
