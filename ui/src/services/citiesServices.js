import API from 'API';
import ServerException from 'exceptions/serverException';

const citiesServices = {
  getCities: async (signal) => {
    try {
      return await API.get('/cities?limit=2000', { signal });
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};

export default citiesServices;
