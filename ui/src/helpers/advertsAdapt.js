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
    id: {
      value: _id,
    },
    title: {
      value: title || '',
    },
    address: {
      value: address || {},
    },
    category: {
      value: category || {},
    },
    contactName: {
      value: contactName || '',
    },
    contactPhone: {
      value: contactPhone || '',
    },
    createdAt: {
      value: moment(createdAt).format('MM-DD-YYYY') || '',
    },
    description: {
      value: description || '',
    },
    images: {
      value: images || [],
    },
    price: {
      value: price || '',
    },
    sellerId: {
      value: sellerId || '',
    },
    updatedAt: {
      value: updatedAt || '',
    },
  }));
};

export default advertsAdapt;
