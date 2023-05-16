import { axiosInstance as axios} from '../utility/RequestIterseptor'; 
import { addParamsToURL } from '../utility/addParamsToURL';

export const VacancyService = {
  async getAllSutableVacancysByParams(params) {
    // !!!!!  params =
    
    // published=1
    // keyword=строка из поиска
    // payment_from=сумма оклада от
    // payment_to=сумма оклада до
    // catalogues=33 - поле key из каталога отраслей
    // page = number of page
    // count = quantity vacansec per page

    try {
        const URL = `vacancies/?published=1&page=1&count=100`;
        
        const { data } = await axios.get(addParamsToURL(URL, params))
  
        return data;
    
    } catch (error) {
      console.error('VacancyService get Sutable vacancys by params', error)
    }
  },
};