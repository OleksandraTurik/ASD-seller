import API from 'API';
import ServerException from 'exceptions/serverException';
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

  updateUser: async (userData) => {
    const userId = tokenService.getUserInfo();
    const { data } = await API.patch(`/users/${userId.id}`, userData);
    return data;
  },
  updateUserPhoto: async (userDataPhoto) => {
    console.log(userDataPhoto.avatar[0]);
    const userId = tokenService.getUserInfo();
    const formData = new FormData();
    formData.append('avatar', userDataPhoto.avatar[0]);
    const settings = { headers: { 'Content-Type': 'multipart/form-data' } };
    const { data } = await API.patch(`/users/${userId.id}/avatar`, formData, settings);
    return data;
  },
  updateUserFavorites: (userId, method, advertId) => {
    const body = { method, advertId };
    return API.patch(`/users/${userId}/favorites`, body);
  },
};

export default userServices;
