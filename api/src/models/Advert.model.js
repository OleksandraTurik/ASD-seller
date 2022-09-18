const mongoose = require('mongoose');
const City = require('./City.model');
const { Schema, model } = mongoose;

const advertSchema = new Schema(
  {
    title: { type: String, required: true },
    sellerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    category: {
      name: { type: String, required: true },
      _id: { type: mongoose.Types.ObjectId, ref: 'Category', required: true },
      child: {
        name: { type: String },
        _id: { type: mongoose.Types.ObjectId, ref: 'Category' },
      },
    },
    address: { type: City.schema, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
  },
  { timestamps: true },
);

advertSchema.index({ title: 'text' });

advertSchema.statics.findWithFilterAndSort = function (search, maxPrice, minPrice, sellerId, sort, category, city) {
  let query = this.find(search ? { $text: { $search: search } } : {});

  if (sellerId) query = query.find({ sellerId });
  if (maxPrice) query = query.where('price').lte(maxPrice);
  if (minPrice) query = query.where('price').gte(minPrice);
  if (category) query = query.find({ $or: [{ 'category._id': category }, { 'category.child._id': category }] });
  if (city) query = query.find({ 'address._id': city });

  if (sort === 'asсDate') return query.sort('createdAt');
  if (sort === 'dscDate') return query.sort('-createdAt');
  if (sort === 'ascTitle') return query.sort('title');
  if (sort === 'dscTitle') return query.sort('-title');
  if (sort === 'ascPrice') return query.sort('price');
  if (sort === 'dscPrice') return query.sort('-price');

  return query;
};

const Advert = model('Advert', advertSchema);

module.exports = Advert;
