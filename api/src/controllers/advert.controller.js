const { Advert } = require('../models');
const StatusError = require('../exceptions/StatusError')
const errorHandler = require('../helpers/errorHandler')

function getAdvertList(req, res) {
  try {
    const list = req.paginatedResults;
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
// eslint-disable-next-line consistent-return
async function getAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const item = await Advert.findById(id);
    return res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
async function getAdvertItemProperty(req, res) {
  try {
    const { id, prop } = req.params;
    const item = await Advert.findById(id, `${prop}`);
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
}
// eslint-disable-next-line consistent-return
function postAdvert(req, res) {
  try {
    const {
      title, price, sellerId, description,
      address,
    } = req.body;

    if (!title || !price || !sellerId || !description || !address) throw new StatusError(400, 'Wrong body structure')

    const item = new Advert({
      title, price, sellerId, description, address,
    });
    item.save((error) => {
      if (error) throw new Error( error);
    });
    res.status(201).json(item);
  } catch (error) {
    errorHandler(res, error)
  }
}

async function deleteAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const response = await Advert.deleteOne({ _id: id });
    res.json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

// eslint-disable-next-line consistent-return
async function patchAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const {
      title, description, price, address,
    } = req.body;

    const item = await Advert.updateOne({ _id: id }, {
      title, description, price, address,
    });
    res.json(item);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = {
  getAdvertList,
  postAdvert,
  getAdvertItem,
  deleteAdvertItem,
  patchAdvertItem,
  getAdvertItemProperty,
};
