import API from 'API';

const citiesServices = {
  getCities: (signal) => API.get('/cities?limit=2000', { signal }),
};

export default citiesServices;
