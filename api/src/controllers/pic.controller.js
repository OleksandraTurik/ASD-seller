const path = require('path');

const AWS = require('../service/AWS.service');
const errorHandler = require('../helpers/error-handler');

function getAdvertImg(req, res) {
  try {
    const { key } = req.params;
    const readStream = AWS.getFileStream(key);
    readStream.pipe(res);
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
