
import { config } from '@/config/config';
import Cookies from 'cookies-js';

const { TOKEN_KEY } = config;

export const createCookies = (jwt: string, jwtExpiration: number, refresh: string, refreshExpiration: number): void => {
  const currentTime = new Date().getTime();
  const timeDiff = jwtExpiration * 1000 - currentTime;
  const days = timeDiff / (1000 * 60 * 60 * 24);
  Cookies.set(TOKEN_KEY, jwt, { expires: days });

  const refreshTimeDiff = refreshExpiration * 1000 - currentTime;
  const refreshDays = refreshTimeDiff / (1000 * 60 * 60 * 24);

};

export const deleteCookies = (): void => {
  Cookies.expire(TOKEN_KEY);
};

export const parseCookies = (cookies: string) => {
  return cookies
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc: { [key: string]: string }, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
};
