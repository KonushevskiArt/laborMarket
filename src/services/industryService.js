import { axiosInstance as axios} from '../utility/RequestIterseptor'; 

export const IndustyService = {  
  async getAll() {
    try {
      const URL = `catalogues/`;

      const { data } = await axios.get(URL)
 
      return data;
    
    } catch (error) {
      console.error('IndustryService getAll', error)
    }
  },
};