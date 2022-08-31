import API from '../API';

const advertApi = {
  getAdverts: async () => {
    try {
      const adverts = API.get('/adverts');
      return adverts;
    } catch (error) {
      console.log(error);
    }
    return null;
  },
};
