const paginationMiddleware = require('./pagination.middleware');
const advertFilterSortMiddleware = require('./advert-filter-sort.middleware');
const userFilterSortMiddleware = require('./user-filter-sort.middleware');
const authMiddleware = require('./auth.middleware');
const errorHandlerMiddleWare = require('./error-handler.middleware');
const idValidationMiddleware = require('./id-validation.middleware');
const multipleUploadMiddleware = require('./multiple.upload.middleware');
const singleUploadMiddleware = require('./single-upload.middleware');

module.exports = {
    paginationMiddleware,
    advertFilterSortMiddleware,
    userFilterSortMiddleware,
    authMiddleware,
    errorHandlerMiddleWare,
    idValidationMiddleware,
    multipleUploadMiddleware,
    singleUploadMiddleware,
};
