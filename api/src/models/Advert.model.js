const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const advertSchema = new Schema({
  title: { type: String, required: true },
  sellerId: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  subcategory: String,
  address: { type: String, required: true },
}, { timestamps: true });

const Advert = model('Advert', advertSchema);

module.exports = Advert;
