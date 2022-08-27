const queryLinkMaker = (req, page, limit) => `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}?page=${page}&limit=${limit}`;

module.exports = queryLinkMaker;
