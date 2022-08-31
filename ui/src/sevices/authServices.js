import API from '../API';
import ServerException from '../exceptions/serverException';

const apiUserServices = {
  login: async (email, password) => {
    try {
      const user = API.post('/users/login', { email, password });
      return user;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },

  registration: async (email, password) => {
    try {
      const user = API.post('/users/registration', { email, password });
      return user;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  logout: async () => {
    try {
      const user = API.post('/users/logout');
      return user;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  modify: async (id, {
    email,
    password,
    fullName,
    address,
    phoneNumber,
  }) => {
    try {
      const body = {
        email,
        password,
        fullName,
        address,
        phoneNumber,
      };
      const userModify = await API.patch(`/users${id}`, body);

      return userModify;
    } catch (e) {
      throw new ServerException(e.response, 'errors');
    }
  },
  deleteUser: async (id) => {
    try {
      const deleteUser = await API.delete(`/users${id}`);
      return deleteUser;
    } catch (e) {
      throw new ServerException(e.response, 'errors');
    }
  },
};

export default apiUserServices;
