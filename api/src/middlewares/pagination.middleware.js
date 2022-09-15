const queryLinkWithPagesMaker = require('../helpers/query-link-with-pages-maker');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/error-handler');

const paginationMiddleware = (req, res, next) => {
  try {
    const page = +req.query.page ? +req.query.page : 1;
    const limit = +req.query.limit ? +req.query.limit : 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const { items } = req;
    const { length } = items;

    if (startIndex >= length) throw new StatusError(404, 'This item is not found');

    const results = { itemsAmount: length };

    if (startIndex > 0) {
      results.previous = queryLinkWithPagesMaker(req, page - 1);
    }
    if (endIndex < length) {
      results.next = queryLinkWithPagesMaker(req, page + 1);
    }
    results.results = items.slice(startIndex, endIndex);
    results.page = page;

    req.paginatedResults = results;
    next();
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports = paginationMiddleware;
