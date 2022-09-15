const { City } = require('../models');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/error-handler');

function getCities(req, res) {
  try {
    res.json(req.paginatedResults);
  } catch (err) {
    errorHandler(res, err);
  }
}

async function getCityById(req, res) {
  try {
    const { id } = req.params;
    const item = await City.findById(id);
    if (!item) throw new StatusError(400, `User with ID: ${id} does not exist`);
    res.json(item);
  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports = {
  getCities,
  getCityById,
};
