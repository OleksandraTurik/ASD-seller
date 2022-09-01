import API from '../API';

const apiUserService = {
  login: async (email, password) => {
    try {
      const user = API.post('/users/login', { email, password });
      return user;
    } catch (e) {
      console.log(e);
    }
    return null;
  },

  registration: async (email, password) => {
    try {
      const user = API.post('/users/registration', { email, password });
      return user;
    } catch (e) {
      console.log(e);
    }
    return null;
  },
};

export default apiUserService;
