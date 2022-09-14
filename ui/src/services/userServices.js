import API from 'API';
import ServerException from '../exceptions/serverException';
import { tokenService } from './tokenService';

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
  updateUser: async (userData) => {
    const userId = tokenService.getUserInfo().id;
    const { data } = await API.patch('/users/631f93936e8939b3cfd22fbf', userData);
    return data;
  },
  updateUserPhoto: async (userDataPhoto) => {
    const userId = tokenService.getUserInfo().id;
    const { data } = await API.patch('/users/631f93936e8939b3cfd22fbf/avatar', userDataPhoto);
    return data;
  },
};

export default userServices;
