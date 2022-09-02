import axios from 'axios';

export const API_URL = 'http://localhost:4000/api';

const API = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default API;
