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
  getUserId: async (id) => {
    try {
      const userId = await API.get(`/users/${id}`);
      return userId;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};

export default userServices;
