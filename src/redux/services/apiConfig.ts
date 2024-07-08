import { config } from '@/config/config';
import Axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const api = Axios.create({
  baseURL: 'https://www.themoviedb.org',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;

const { TOKEN_KEY } = config;

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    console.error(error);
    return await Promise.reject(error);
  }
);

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const tokenCookie = TOKEN_KEY;

    if (tokenCookie !== undefined) {
      if (config && config.headers) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${TOKEN_KEY}`;
      }
      return config;
    }

    return config;
  },
  async (error) => {
    console.warn(error);

    return await Promise.reject(error);
  }
);
