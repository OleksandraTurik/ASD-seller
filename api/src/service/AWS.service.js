const s3 = require('../config');
const StatusError = require('../exceptions/StatusError');
const uuid = require('uuid');

class AWSService {
    params(file, fileTag) {
        return {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileTag + new Date() + uuid.v4(),
            Body: file,
        };
    }

    async postPhoto(file, fileTag) {
        try {
            const params = new this.params(file, fileTag);
            console.log(params);
            const data = await s3.putObject(params).promise();
            console.log(data);
        } catch (err) {
            throw new StatusError(500, err.message);
        }
    }
}

module.exports = new AWSService();
