import API from 'API';
import ServerException from '../exceptions/serverException';

const citiesServices = {
  getCities: async () => {
    try {
      const cities = await API.get('/cities?limit=2000');
      return cities;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};

export default citiesServices;
