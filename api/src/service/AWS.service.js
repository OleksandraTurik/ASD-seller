const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const s3 =  new S3({
    region: process.env.AWS_S3_REGION,
    accessKeyId: process.env.AWS_S3_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});


class AWSService {
     uploadPhoto(file) {
        const fileStream = fs.createReadStream(file.path);
        const uploadParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Body: fileStream,
            Key: file.filename,
        };

        return s3.upload(uploadParams).promise() ;
    }

    getFileStream(fileKey) {
         const downloadParams = {
             Key: fileKey,
             Bucket: process.env.AWS_S3_BUCKET_NAME,
         };

         return s3.getObject(downloadParams).createReadStream();
    }
}

module.exports = new AWSService();
