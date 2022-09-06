const { City } = require('../models');
const errorHandler = require('../helpers/error-handler');
const StatusError = require('../exceptions/StatusError');

const cityFilterSortMiddleware = async (req, res, next) => {
    try {
        const { search, region } = req.query;
        console.log({ search, region });
        const items = await City.findFiltered(search, region);
        if (!items) throw new StatusError(404, 'This city does not exist');
        req.items = items;
        next();
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports = cityFilterSortMiddleware;