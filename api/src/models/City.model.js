const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const citySchema = new Schema({
    // name: {
    //     en: {
    //         type: String,
    //     },
    //     ru: {
    //         type: String,
    //     },
    //     ua: {
    //         type: String,
    //         required: true,
    //     },
    // },
    // public_name: {
    //     en: {
    //         type: String,
    //     },
    //     ru: {
    //         type: String,
    //     },
    //     ua: {
    //         type: String,
    //         required: true,
    //     },
    // },
    // post_code: {
    //     type: [Number],
    // },
    // type: { type: String, required: true },
    // meta: {
    //     osm_id: {
    //         type: String,
    //     },
    //     google_maps_place_id: {
    //         type: String,
    //     },
    // },
}, { strict: false });

citySchema.statics.findFiltered = function (search) {
    const query = this.find({
        'name.en': {
            $regex: search ? `\\b${search.replaceAll(' ', '|')}` : '.',
            $options: 'gmi',
        },
    });

    return query;
};

const City = model('City', citySchema, 'cities');

module.exports = City;
