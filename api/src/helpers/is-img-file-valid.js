const isImgFileValid = (mimetype) => {
    const match = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    return match.includes(mimetype);
};

module.exports = isImgFileValid;
