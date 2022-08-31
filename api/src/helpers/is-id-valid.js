const mongoose = require('mongoose');

const isIdValid = (id) => mongoose.Types.ObjectId.isValid(id);

module.exports = isIdValid;
