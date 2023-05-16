export const addParamsToURL = (URL, params = {}) => {
  let URLWithParams = URL;
  for (const [parameter, value] of Object.entries(params)) {
    URLWithParams = `${URL}&${parameter}=${value}`;
  } 
  return URLWithParams;
}