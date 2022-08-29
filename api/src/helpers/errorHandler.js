const StatusError = require('../exceptions/StatusError')

const errorHandler = (res, error) => {
  if (error instanceof StatusError) return res.status(error.status).json(error.message);
   res.status(500).json(error);
};

module.exports = errorHandler;
