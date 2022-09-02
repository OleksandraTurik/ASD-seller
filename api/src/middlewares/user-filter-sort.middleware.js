const { User } = require('../models');
const errorHandler = require('../helpers/error-handler');

const userFilterSortMiddleware = async (req, res, next) => {
    try {
        const { search, sort } = req.query;
        req.items = await User.findWithFilterAndSort(search, sort);
        next();
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports = userFilterSortMiddleware;
