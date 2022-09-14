const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const citySchema = new Schema(
  {
    city: String,
  },
  { strict: false },
);

citySchema.statics.findFiltered = function (search) {
  const query = this.find(search ? { $text: { $search: search } } : {});

  return query;
};

const City = model('City', citySchema, 'cities');

module.exports = City;
