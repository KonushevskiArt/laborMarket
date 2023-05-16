import Cookies from 'js-cookie';

export const setTokenCookies = (token, refreshToken) => {
  Cookies.set('token', token, { expires: 6 }) 
  Cookies.set('refresh-token', refreshToken) 
}