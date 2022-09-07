import API from '../API';

const categoriesServices = {
  getCategories: async () => {
    const categories = await API.get('/categories');
    return categories;
  },
};

export default categoriesServices;
