import moment from 'moment';

const advertsAdapt = (data) => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(({
    _id,
    title,
    address,
    category,
    contactName,
    contactPhone,
    createdAt,
    description,
    images,
    price,
    sellerId,
    updatedAt,
  }) => ({
    id: _id,
    title: title || '',
    address: address || {},
    category: category || {},
    contactName: contactName || '',
    contactPhone: contactPhone || '',
    createdAt: moment(createdAt).format('MM-DD-YYYY') || '',
    description: description || '',
    images: images || [],
    price: price || '',
    sellerId: sellerId || '',
    updatedAt: moment(createdAt).format('MM-DD-YYYY') || '',
  }));
};

export default advertsAdapt;
