const path = require('path');
const fs = require('fs');
const multer = require('multer');

const isImgFileValid = require('../helpers/is-img-file-valid');
const uuid = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirPath = path.join(__dirname, '..', '..', 'uploads');
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    cb(null, dirPath);
  },
  filename: (req, file, cb) => {
    if (!isImgFileValid(file.mimetype)) {
      const message = `${file.originalname} is invalid. Only accept png, jpg or jpeg`;
      return cb(message, null);
    }
    const name = `${Date.now()}-${uuid.v4()}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`;
    file.originalname = name;
    cb(null, name);
  },
});

const upload = multer({ storage });

module.exports = (key) => upload.single(key);
