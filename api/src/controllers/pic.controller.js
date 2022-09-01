const path = require('path');

const errorHandler = require('../helpers/errorHandler');

function getAdvertImg(req, res) {
    try {
        const { file } = req.params;
        res.sendfile(path.join(__dirname, '..', '..', 'uploads', file));
    } catch (err) {
        errorHandler(res, err);
    }
}

function getCategoryImg(req, res) {
    try {
        const { file } = req.params;
        res.sendfile(path.join(__dirname, '..', 'assets', 'img', 'categories', file));
    } catch (err) {
        errorHandler(res, err);
    }
}

module.exports = { getAdvertImg, getCategoryImg };
