const { Advert } = require('../models');

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
    res.status(500).json(err);
  }
};

module.exports = advertFilterSortMiddleware;
