import API from '../API';
import { tokenService } from './tokenService';

export const apiUserService = {
  login: async (userData) => {
    const { data } = await API.post('/users/login', userData);
    tokenService.updateTokens(data);
    return data;
  },

  registration: async (email, password) => {
    const { data } = API.post('/users/registration', { email, password });
    tokenService.updateTokens(data);
    return data;
  },

  logout: async () => {
    localStorage.removeItem('tokens');
  },
  refreshToken: async () => {
    const { data } = API.get('/users/refresh');
    tokenService.updateTokens(data);
    return data;
  },
};

export default apiUserService;
