const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, require: true },
  password: { type: String, unique: true, req: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  fullName: { type: String, default: 'Vasya Pypkin' },
  address: { type: String, default: 'Chernivstis' },
  avatar: { type: String },
  phoneNumber: { type: String, default: '3800000' },
  adverts: [{ type: mongoose.Types.ObjectId, ref: 'Advert' }],
}, { timestamps: true });

module.exports = model('User', UserSchema);
