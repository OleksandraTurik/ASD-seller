import API from 'API';
import ServerException from 'exceptions/serverException';
import { tokenService } from './tokenService';

const userServices = {
  fetchInfoExactUser: async (id, signal) => {
    try {
      const user = await API.get(`/users/${id}`, { signal });
      return user;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  getAdvertsListUser: async (id, signal) => {
    try {
      const { data: { itemsAmount, results, next } } = await API.get(`/adverts?seller=${id}`, { signal });
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
