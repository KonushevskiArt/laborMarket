import { axiosInstance as axios} from '../utility/RequestIterseptor'; 
import { SECRET_KEY } from '../variables';
import { setTokenCookies } from '../utility/setTokensCookies';

const clientId = '2356';
const clientLogin = 'sergei.stralenia@gmail.com';
const clientPass = 'paralect123';

const getToken = async (URL) => {
  const { data } = await axios(URL)

  const { access_token, refresh_token} = data;
  setTokenCookies(access_token, refresh_token);
 
  return data;
}

export const AuthService = {  
  async getAccessToken() {
    try {
      const URL = `oauth2/password/?login=${clientLogin}&password=${clientPass}&client_id=${clientId}&client_secret=${SECRET_KEY}&hr=0`;
      
      return await getToken(URL);
    } catch (error) {
      console.error(error)
    }
  },
  async refreshAccessToken(refreshToken) {
    try {
      const URL = `oauth2/refresh_token/?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${SECRET_KEY}`
      
      return await getToken(URL);
    } catch (error) {
      console.error(error)
    }
  },
};
