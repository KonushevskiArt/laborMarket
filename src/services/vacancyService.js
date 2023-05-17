import { axiosInstance as axios} from '../utility/RequestIterseptor'; 
import { addParamsToURL } from '../utility/addParamsToURL';

export const VacancyService = {
  async getAllSutableVacanciesByParams(params) {
    // !!!!!  params =
    
    // published=1
    // keyword=строка из поиска
    // payment_from=сумма оклада от
    // payment_to=сумма оклада до
    // catalogues=33 - поле key из каталога отраслей
    // page = number of page
    // count = quantity vacansec per page
    const page = 1;
    const count = 20;

    try {
        const URL = `vacancies/?published=1&page=${page}&count=${count}`;
        
        const { data } = await axios.get(addParamsToURL(URL, params))
  
        return data;
    
    } catch (error) {
      console.error('VacancyService get Sutable vacancys by params', error)
    }
  },
  async getVacancyByID(ID) {

    try { 
        const URL = `vacancies/${ID}`;
        
        const { data } = await axios.get(addParamsToURL(URL))
  
        return data;
    
    } catch (error) {
      console.error('VacancyService get Sutable vacancys by params', error)
    }
  },
};