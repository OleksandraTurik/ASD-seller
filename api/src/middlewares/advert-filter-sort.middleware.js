const { Advert } = require('../models');
const errorHandler = require('../helpers/error-handler');

const advertFilterSortMiddleware = async (req, res, next) => {
  try {
    const { search, seller, minPrice, maxPrice, sort, category, city } = req.query;
    req.items = await Advert.findWithFilterAndSort(search, maxPrice, minPrice, seller, sort, category, city);
    next();
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = advertFilterSortMiddleware;
