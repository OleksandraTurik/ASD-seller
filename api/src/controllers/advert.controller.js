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
    console.log(req.body);
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
    if (req.file.length < 1)
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
    console.log(fileObjects);
    const images = fileObjects.map(e => e.key);
    console.log(images);

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
    const item = await Advert.findById(id);
    if (item.images) await Promise.all(item.images.map(file => AWS.deletePhoto(file)));

    const keyObjects = await Promise.all(req.files.map(file => AWS.uploadPhoto(file)));
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
