import axios from 'axios';
import { toast } from 'react-toastify';

// ARGS - 2 F (successful response, if response includes ERR) this F will be executed everytime we have a response with an ERROR
axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    toast('An unexpected error ocurred.', {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};