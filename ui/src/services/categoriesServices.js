import API from 'API';

const categoriesServices = {
  getCategories: async (signal) => {
    const categories = await API.get('/categories', { signal });
    return categories;
  },
};

export default categoriesServices;
