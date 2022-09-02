const { Types } = require('mongoose');

const { Advert, User } = require('../models');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/error-handler');
const AWS = require('../service/AWS.service');

function getAdvertList(req, res) {
  try {
    const list = req.paginatedResults;
    res.status(200).json(list);
  } catch (err) {
    errorHandler(res, err);
  }
}
async function getAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const item = await Advert.findById(id);
    if (!item) throw new StatusError(404, 'This advert does not exist');
    return res.status(200).json(item);
  } catch (err) {
    errorHandler(res, err);
  }
}
async function getAdvertItemProperty(req, res) {
  try {
    const { id, prop } = req.params;
    const item = await Advert.findById(id, `${prop}`);
    if (!item) throw new StatusError(404, 'This advert does not exist');
    res.json(item);
  } catch (err) {
    errorHandler(res, err);
  }
}
async function postAdvert(req, res) {
  try {
    const {
      title, price, sellerId, description,
      address,
    } = req.body;

    if (!title || !price || !sellerId || !description || !address) throw new StatusError(400, 'Wrong body structure');
    if (!(await User.findById(sellerId))) throw new StatusError(404, 'This user does not exist');

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
    if (!item) throw new StatusError(404, 'This advert does not exist');
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

    if (Advert.exists({ _id: id }))
      throw new StatusError(404, 'This advert does not exist');

    const item = await Advert.updateOne({ _id: id }, {
      title, description, price, address,
    });
    res.json(item);
  } catch (err) {
    errorHandler(res, err);
  }
}

async function patchAdvertPhoto(req, res) {
  try {
    // console.log(req.files);
    if (req.files.length <= 0) throw new StatusError(400, 'No file has been uploaded');

    const { id } = req.params;
    if (!(await Advert.findById(id))) throw new StatusError(404, 'This advert does not exist');

    const keyObjects = await Promise.all(req.files.map(f => AWS.uploadPhoto(f)));
    console.log(keyObjects);
    const keys = keyObjects.map(e => e.key);
    console.log(keys);
    await Advert.updateOne({ _id: id }, { images: keys });

    res.status(201).json({ status: 'Files have been successfully uploaded', keys });
  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports = {
  getAdvertList,
  postAdvert,
  patchAdvertPhoto,
  getAdvertItem,
  deleteAdvertItem,
  patchAdvertItem,
  getAdvertItemProperty,
};
