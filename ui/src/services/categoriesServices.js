import API from 'API';

const categoriesServices = {
  getCategories: (signal) => API.get('/categories', { signal }),
};

export default categoriesServices;
