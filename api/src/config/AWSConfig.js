require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
    region: process.env.AWS_S3_REGION,
    accessKeyId: process.env.AWS_S3_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

module.exports = s3;
