require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const { apiRouter, picRouter } = require('./routes');
const { errorHandlerMiddleWare } = require('./middlewares');

const StatusError = require('./exceptions/StatusError');

const { PORT } = process.env || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api', apiRouter);
app.use('/pic', picRouter);

app.all('*', () => {
  throw new StatusError(400, 'Bad request');
});

app.use(errorHandlerMiddleWare);

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
