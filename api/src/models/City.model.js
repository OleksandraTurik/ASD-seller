const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const citySchema = new Schema({}, { strict: false });
citySchema.index({ object_name: 'text', region: 'text' });

citySchema.statics.findFiltered = function (search, region) {
    const query = this.find(region ? { $text: { $search: region } } : {});

    return query;
};

const City = model('City', citySchema, 'cities');

module.exports = City;
