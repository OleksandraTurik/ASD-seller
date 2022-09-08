const Category = require('../models/Category.model');
const slugify = require('slugify');
const errorHandler = require('../helpers/error-handler');
const StatusError = require('../exceptions/StatusError');

class CategoryController {
  async create(req, res){
    try {
      const categoryObj ={
        name:req.body.name,
        slug: slugify(req.body.name),
      };

      if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
      }
      const category = new Category(categoryObj);
      category.save((error, category) => {
        if(error) return res.status(400).json({ error });
        if(category){
          return res.status(201).json({ category });
        }
      });
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async getCategory(req, res){
    try {
      Category.find({})
        .exec((error, categories) => {
          if(error){
            throw new StatusError(404, 'category does not exist');
          }
          function createCategories(categories, parentId = null){
            const categoryList = [];
            let category;
            if(parentId == null){
              category = categories.filter(cat => cat.parentId == undefined);
            } else {
              category = categories.filter(cat => cat.parentId === parentId);
            }

            for(const cate of category){
              categoryList.push({
                _id:cate._id,
                name: cate.name,
                slug: cate.slug,
                children: createCategories(categories, cate.id),
              });
            }
            return categoryList;
          }
          if(categories){
            const categoryList = createCategories(categories);

            res.status(200).json({ categoryList });
          }
        });
    }catch (e) {
      errorHandler(res, e);
    }
  }
}

module.exports=  new CategoryController();
