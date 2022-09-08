import API from '../API';
import { tokenService } from './tokenService';

export const apiUserService = {
  login: async (userData) => {
    const { data } = await API.post('/users/login', userData);
    tokenService.updateTokens(data);
    return data;
  },

  logout: async () => {
    await API.post('/users/logout');
    localStorage.removeItem('tokens');
  },

  refreshToken: async () => {
    const { data } = API.get('/users/refresh');
    tokenService.updateTokens(data);
    return data;
  },
};

export default apiUserService;
