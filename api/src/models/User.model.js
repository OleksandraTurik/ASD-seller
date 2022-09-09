const { Schema, model, Types } = require('mongoose');
const City = require('./City.model');

const UserSchema = new Schema({
  email: { type: String, unique: true, require: true },
  password: { type: String, unique: true, req: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  fullName: { type: String },
  address: { type: City.schema },
  avatar: { type: String },
  phoneNumber: { type: String },
  adverts: { type: String, default: null },
  favorites: { type: [Types.ObjectId], ref: 'Advert' },
}, { timestamps: true });

UserSchema.statics.findWithFilterAndSort = function (search, sort) {
  const query = this.find({
    fullName: {
      $regex: search ? `\\b${search.replaceAll(' ', '|')}\\b` : '.*',
      $options: 'gmi',
    },
  });
  if (sort === 'ascName') return query.sort('fullName');
  if (sort === 'dscName') return query.sort('-fullName');
  if (sort === 'ascDate') return query.sort('createdAt');
  if (sort === 'dscDate') return query.sort('-createdAt');

  return query;
};

module.exports = model('User', UserSchema);
