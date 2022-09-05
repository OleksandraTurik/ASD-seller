import API from 'API';
import ServerException from '../exceptions/serverException';

const userServices = {
  fetchUsers: async (filters) => {
    try {
      const users = await API.get('/users');
      return users;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  getAdvertsListUser: async (id) => {
    try {
      const userAdverts = await API.get(`/adverts/${id}`);
      return userAdverts;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};

export default userServices;
