import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthService } from '../services/authService';
import { SECRET_KEY } from '../variables';

const addAuthRequiredHeaders = (request, token) => {
  return {
    ...request.headers,
    'X-Api-App-Id': `${SECRET_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'Authorization': `Bearer ${token}`,
  };
}

const baseURL = 'https://startup-summer-2023-proxy.onrender.com/2.0/';

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use( async (request) => {

  let token = Cookies.get('token') || null;
  
  if (token === null) {
    const refreshToken = Cookies.get('refresh-token') || null;

    if (refreshToken) {
      try {
        await AuthService.refreshAccessToken(refreshToken);
        token = Cookies.get('token');
      } catch (error) {
        console.error('refreshAccessToken:', error);
      }
    } 
  } 
  request.headers = addAuthRequiredHeaders(request, token);
  
  return request;
});

