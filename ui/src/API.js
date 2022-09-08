import axios from 'axios';
import apiUserService from 'services/authServices';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { tokenService } from 'services/tokenService';

export const API_URL = 'http://localhost:4000/api';

const API = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
const onRequestSuccess = async (config) => {
  const tokens = tokenService.getTokens();
  const currentDate = new Date();
  if (tokens?.accessToken) {
    const decodedToken = jwt_decode(tokens?.accessToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) { //
      await apiUserService.refreshToken();
      if (config?.headers) {
        config.headers.Authorization = `Bearer ${
          tokenService.getAccessToken()
        }`;
      }
    }
    if (config?.headers) {
      config.headers.Authorization = `Bearer ${
        tokenService.getAccessToken()
      }`;
    }
  }
  return config;
};

API.interceptors.request.use(onRequestSuccess);

export default API;
