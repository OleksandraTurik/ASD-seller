const { Category } = require('../models');
const AWS = require('../service/AWS.service');
const errorHandler = require('../helpers/error-handler');
const StatusError = require('../exceptions/StatusError');

  async function createCategory(req, res){
    try {
      const { name, parentId } = req.body;
      console.log({ body: req.body, file: req.file });

      if (!name)
        throw new StatusError(400, 'Category name is required');
      if (parentId && !(await Category.findById(parentId)))
        throw new StatusError(400, `Category with ID: ${parentId} does not exist`);
      if (!parentId && !req.file)
        throw new StatusError(400, 'Image with \'image\' key is required');

      if (!parentId && req.file) {
        const { key } = await AWS.uploadPhoto(req.file);
        const item = await Category.create({
          name, image: `pic/${key}`,
        });
        if (parentId)
          await Category.updateOne({ _id: parentId }, { $push: { children: item } });
        res.json(item);
      } else {
        const item = await Category.create({
          name, parentId,
        });
        if (parentId)
          await Category.updateOne({ _id: parentId }, { $push: { children: item } });
        res.json(item);
      }

    } catch (e) {
      errorHandler(res, e);
    }
  }

  async function getCategories(req, res){
    try {
      const items = await Category.find({ parentId: null });
      res.json(items);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async function getCategoryById(req, res) {
    try {
      const { id } = req.params;
      if (!(await Category.findById(id)))
        throw new StatusError(400, `Category with ID: ${id} does not exist`);
      res.json(await Category.findById(id));
    } catch (err) {
      errorHandler(res, err);
    }
  }

  async function deleteCategory(req, res) {
    try {
      const { id } = req.params;
      if (!(await Category.findById(id)))
        throw new StatusError(400, `Category with ID: ${id} does not exist`);
      const response = await Promise.all([
          Category.deleteOne({ _id: id }),
          Category.deleteMany({ parentId: id }),
      ]);
      res.json(response);
    } catch (err) {
      errorHandler(res, err);

    }
  }
  //
  // async function patchCategory(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { name } = req.body;
  //     if (!(await Category.findById(id)))
  //       throw new StatusError(400, `Category with ID: ${id} does not exist`);
  //
  //   } catch (err) {
  //     errorHandler(res, err);
  //   }
  // }

module.exports = {
    createCategory,
    getCategories,
    deleteCategory,
    getCategoryById,
};
