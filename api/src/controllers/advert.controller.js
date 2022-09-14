const { Types } = require('mongoose');

const { Advert, User, City, Category } = require('../models');
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
    const { title, price, sellerId, description, address, contactName, contactPhone, category } = req.body;
    if (!title || !price || !sellerId || !description || !address || !contactName || !contactPhone || !category)
      throw new StatusError(
        400,
        'Wrong body structure, title, price, sellerId, description, address, contactName, contactPhone and category are required',
      );
    if (req.files.length < 1) throw new StatusError(400, 'At least 1 photo is required');
    if (!(await User.findById(sellerId))) throw new StatusError(404, `Seller with ID: ${sellerId} does not exist`);
    if (!(await Category.findById(category)))
      throw new StatusError(400, `Category with ID: ${category} does not exist`);
    if (title.length < 16 || title.length > 200) throw new StatusError(400, 'Title must have 16-200 symbols');
    if (description.length < 80 || description.length > 9000)
      throw new StatusError(400, 'Description must have 80-9000 symbols');
    if (price <= 0) throw new StatusError(400, 'Price must be larger than 0');

    const addressItem = await City.findById(address);
    if (!addressItem) throw new StatusError(400, 'City with this ID does not exist');

    let categoryItem = await Category.findById(category);
    if (categoryItem.children.length !== 0) throw new StatusError(400, "This category can't be added to the advert");
    if (categoryItem.parentId) {
      const { name } = await Category.findById(categoryItem.parentId);
      categoryItem = {
        name,
        _id: categoryItem.parentId,
        child: {
          _id: categoryItem._id,
          name: categoryItem.name,
        },
      };
    } else categoryItem = { _id: address, name: categoryItem.name };

    const fileObjects = await Promise.all(req.files.map((f) => AWS.uploadPhoto(f)));
    const images = fileObjects.map((e) => `pic/${e.key}`);

    const item = await Advert.create({
      title,
      price,
      sellerId: new Types.ObjectId(sellerId),
      description,
      address: addressItem,
      images,
      contactPhone,
      contactName,
      category: categoryItem,
    });

    await User.updateOne({ _id: sellerId }, { adverts: `/api/adverts?seller=${sellerId}` });
    res.status(201).json(item);
  } catch (error) {
    errorHandler(res, error);
  }
}

async function deleteAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const item = await Advert.findById(id);
    if (!item) throw new StatusError(400, `Advert with ID: ${id} does not exist`);
    const response = await Advert.deleteOne({ _id: id });

    const sellerAdverts = await Advert.find({ sellerId: item.sellerId });
    if (sellerAdverts.length === 0) await User.updateOne({ _id: item.sellerId }, { adverts: null });

    res.json(response);
  } catch (err) {
    errorHandler(res, err);
  }
}

async function patchAdvertItem(req, res) {
  try {
    const { id } = req.params;
    const { title, description, price, address, contactPhone, contactName, category } = req.body;
    if (!(await Advert.findById(id))) throw new StatusError(400, `Advert with ID: ${id} does not exist`);
    if (category && !(await Category.findById(category)))
      throw new StatusError(400, `Category with ID: ${category} does not exist`);
    if (title && (title.length < 16 || title.length > 200))
      throw new StatusError(400, 'Title must have 16-200 symbols');
    if (description && (description.length < 80 || description.length > 9000))
      throw new StatusError(400, 'Description must have 80-9000 symbols');
    if (price && +price <= 0) throw new StatusError(400, 'Price must be > 0');
    if (address && !(await City.findById(address)))
      throw new StatusError(400, `City with ID: ${address} does not exist`);

    let categoryItem = await Category.findById(category);
    if (categoryItem.children.length !== 0) throw new StatusError(400, "This category can't be added to the advert");
    if (categoryItem.parentId) {
      const { name } = await Category.findById(categoryItem.parentId);
      categoryItem = {
        name,
        _id: categoryItem.parentId,
        child: {
          _id: categoryItem._id,
          name: categoryItem.name,
        },
      };
    } else categoryItem = { _id: address, name: categoryItem.name };

    const addressItem = await City.findById(address);

    const { sellerId, address: originalAddress, category: originalCategory } = await Advert.findById(id);
    let images;

    if (req.files.length > 0) {
      const keyObjects = await Promise.all(req.files.map((file) => AWS.uploadPhoto(file)));
      images = keyObjects.map((e) => `pic/${e.key}`);
    } else {
      const advertItem = await Advert.findById(id);
      images = advertItem.images;
    }

    await Advert.updateOne(
      { _id: id },
      {
        title,
        description,
        price,
        address: addressItem || originalAddress,
        contactPhone,
        contactName,
        images,
        category: categoryItem || originalCategory,
      },
    );
    await User.updateOne({ _id: sellerId }, { adverts: `/api/adverts?seller=${sellerId}` });
    const item = await Advert.findById(id);

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
