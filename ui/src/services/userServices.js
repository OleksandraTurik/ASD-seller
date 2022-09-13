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
  fetchInfoExactUser: async (id) => {
    try {
      const user = await API.get(`/users/${id}`);
      return user;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  getAdvertsListUser: async (id) => {
    try {
      const { data: { itemsAmount, results, next } } = await API.get(`/adverts?seller=${id}`);
      return {
        itemsAmount,
        results,
        next,
      };
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};

export default userServices;
