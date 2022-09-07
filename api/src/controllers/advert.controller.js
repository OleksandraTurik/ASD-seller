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
      title,
      price,
      sellerId,
      description,
      address,
      contactName,
      contactPhone,
    } = req.body;
    if (!title || !price || !sellerId || !description || !address || !contactName || !contactPhone)
        throw new StatusError(400, 'Wrong body structure');
    if (req.files.length < 1)
        throw new StatusError(400, 'At least 1 photo is required');
    if (!(await User.findById(sellerId)))
        throw new StatusError(404, 'This seller does not exist');
    if (title.length < 16 || title.length > 200)
        throw new StatusError(400, 'Title must have 16-200 symbols');
    if (description.length < 80 || description.length > 9000)
        throw new StatusError(400, 'Description must have 80-9000 symbols');
    if (price <= 0)
        throw new StatusError(400, 'Price must be larger than 0');

    const fileObjects = await Promise.all(req.files.map(f => AWS.uploadPhoto(f)));
    const images = fileObjects.map(e => e.key);

    const item = new Advert({
      title, price, sellerId: new Types.ObjectId(sellerId), description, address, images, contactPhone, contactName,
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
      title, description, price, address, contactPhone, contactName,
    } = req.body;
    // console.log({ body: req.body, files: req.files });

    if (!(await Advert.find({ _id: id })))
      throw new StatusError(404, 'This advert does not exist');
    if (title && (title.length < 16 || title.length > 200))
      throw new StatusError(400, 'Title must have 16-200 symbols');
    if (description && (description.length < 80 || description.length > 9000))
      throw new StatusError(400, 'Description must have 80-9000 symbols');
    if (price && +price <= 0)
      throw new StatusError(400, 'Price must be > 0');

    if (req.files.length > 0) {
      const keyObjects = await Promise.all(req.files.map(file => AWS.uploadPhoto(file)));
      const images = keyObjects.map(e => e.key);
      const item = await Advert.updateOne({ _id: id }, {
        title, description, price, address, contactPhone, contactName, images,
      });
      res.json(item);
    } else {
      const advertItem = await Advert.findById(id);
      const { images } = advertItem;
      const item = await Advert.updateOne({ _id: id }, {
        title, description, price, address, contactPhone, contactName, images,
      });
      res.json(item);
    }

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
