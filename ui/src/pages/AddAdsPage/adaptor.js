const adaptToDefaultValues = (data, isEdit) => {
  if (isEdit) {
    return ({
      title: data.title,
      price: data.price,
      description: data.description,
      address: data.address?._id,
      category: data.category?.child._id,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      sellerId: data.sellerId,
    });
  }
  return ({
    title: '',
    price: '',
    description: '',
    address: '',
    contactName: '',
    contactPhone: '',
    sellerId: '',
  });
};

export default adaptToDefaultValues;
