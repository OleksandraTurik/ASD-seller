const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    parentId: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

categorySchema.add({
  children: {
    type: [categorySchema],
  },
});

module.exports = mongoose.model('Category', categorySchema);
