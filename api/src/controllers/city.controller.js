const errorHandler = require('../helpers/error-handler');

function getCities(req, res) {
    try {
        res.json(req.paginatedResults);
    } catch (err) {
        errorHandler(res, err);
    }
}

module.exports = {
    getCities,
};
