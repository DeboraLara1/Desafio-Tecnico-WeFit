import axios from 'axios';

export const API_CONFIG = {
  baseURL: 'https://wefit-movies.vercel.app/api',
  timeout: 10000,
};

export const URL = axios.create(API_CONFIG);

export default URL;
