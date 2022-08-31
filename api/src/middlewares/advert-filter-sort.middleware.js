const { Advert } = require('../models');
const errorHandler = require('../helpers/errorHandler');

const advertFilterSortMiddleware = async (req, res, next) => {
  try {
    const {
      search,
      seller,
      minPrice,
      maxPrice,
      sort,
    } = req.query;
    const query = await Advert.findWithFilterAndSort(search, maxPrice, minPrice, seller, sort);
    req.items = query;
    next();
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = advertFilterSortMiddleware;
