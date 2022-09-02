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
};

export default userServices;
