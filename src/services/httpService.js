import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';

/* 
To set headers on all kinds of http requests 
whenever we have an http request this token will be included
*/


// ARGS - 2 F (successful response, if response includes ERR) this F will be executed everytime we have a response with an ERROR
axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast('An unexpected error ocurred.', {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
} 

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};