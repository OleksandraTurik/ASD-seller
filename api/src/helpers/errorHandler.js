const StatusError = require('../exceptions/StatusError');

const errorHandler = (res, error) => {
  if (error instanceof StatusError) return res.status(error.status).json({ status: error.status, message: error.message });
   res.status(500).json({ status: 500, message: error.message });
};

module.exports = errorHandler;
