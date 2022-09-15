const queryLinkWithPagesMaker = (req, page) => {
  const regex = /page=[\d+]/gm;
  const originalUrl = req.originalUrl.match(regex)
    ? req.originalUrl.replace(regex, `page=${page}`)
    : `${req.originalUrl}?page=${page}`;
  return `${req.protocol}://${req.get('host')}${originalUrl}`;
};

module.exports = queryLinkWithPagesMaker;
