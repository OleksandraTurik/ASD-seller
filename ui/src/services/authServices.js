import API from '../API';
import { tokenService } from './tokenService';

export const apiUserService = {
  login: async (userData) => {
    const user = API.post('/users/login', userData);
    tokenService.updateTokens(user);
    return user;
  },

  registration: async (email, password) => {
    const user = API.post('/users/registration', { email, password });
    tokenService.updateTokens(user);
    return user;
  },

  logout: async () => {
    localStorage.removeItem('tokens');
  },
  refreshToken: async () => {
    const user = API.get('/users/refresh');
    tokenService.updateTokens(user);
    return user;
  },
};

export default apiUserService;
