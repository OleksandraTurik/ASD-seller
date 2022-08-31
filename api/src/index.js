require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const { apiRouter, picRouter } = require('./routes');

const { PORT } = process.env || 4000;
const app = express();

const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};
app.use(fileUpload({
  createParentPath: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.static('./src/'));

app.use('/api', apiRouter);
app.use('/pic', picRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
