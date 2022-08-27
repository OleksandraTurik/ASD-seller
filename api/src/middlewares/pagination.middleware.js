const queryLinkMaker = require('../helpers/query-link-maker');

// eslint-disable-next-line consistent-return
const paginationMiddleware = (model) => async (req, res, next) => {
  try {
    const page = req.query.page ? +req.query.page : 1;
    const limit = req.query.limit ? +req.query.limit : 10;

    const startIndex = (page - 1) * limit;
    const endIndex = (page * limit) - 1;

    const { length } = await model.find();
    if (startIndex >= length) return res.status(404).json('Did not found');

    const results = { itemsAmount: length };

    if (startIndex > 0) {
      results.prev = queryLinkMaker(req, page - 1, limit);
    }
    if (endIndex < length - 1) {
      results.next = queryLinkMaker(req, page + 1, limit);
    }
    results.results = await model.find().limit(limit).skip(startIndex).exec();

    req.paginatedResults = results;
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = paginationMiddleware;
