const { Advert, User } = require('../models');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/errorHandler');
const { Types } = require('mongoose');

function getAdvertList(req, res) {
  try {
    const list = req.paginatedResults;
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
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
async function postAdvert(req, res) {
  try {
    const {
      title, price, sellerId, description,
      address,
    } = req.body;

    if (!title || !price || !sellerId || !description || !address) throw new StatusError(400, 'Wrong body structure');

    const item = new Advert({
      title, price, sellerId: new Types.ObjectId(sellerId), description, address,
    });

    item.save((error) => {
      if (error) throw new Error(error);
    });

    const user = await User.updateOne({ _id: sellerId }, { $push: { adverts: [new Types.ObjectId(item._id)] } });
    res.status(201).json({ item, user });
  } catch (error) {
    errorHandler(res, error);
  }
}

async function deleteAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const item = await Advert.findById(id);
    await User.updateOne({ _id: item.sellerId }, { $pullAll: { adverts: [id] } });
    const response = await Advert.deleteOne({ _id: id });
    res.json(response);
  } catch (err) {
    errorHandler(res, err);
  }
}
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
    errorHandler(res, err);
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
