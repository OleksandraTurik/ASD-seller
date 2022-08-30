const queryLinkWithPagesMaker = require('../helpers/query-link-with-pages-maker');

// eslint-disable-next-line consistent-return
const paginationMiddleware = (req, res, next) => {
  try {
    const page = +req.query.page ? +req.query.page : 1;
    const limit = +req.query.limit ? +req.query.limit : 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const { items } = req;
    const { length } = items;

    if (startIndex >= length) return res.status(404).json('Did not found');

    const results = { itemsAmount: length };

    if (startIndex > 0) {
      results.previous = queryLinkWithPagesMaker(req, page - 1);
    }
    if (endIndex < length) {
      results.next = queryLinkWithPagesMaker(req, page + 1);
    }
    results.results = items.slice(startIndex, endIndex);

    req.paginatedResults = results;
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = paginationMiddleware;
