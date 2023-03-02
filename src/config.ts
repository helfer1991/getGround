import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = 'http://nyx.vima.ekt.gr:3000';

const handleHTTPRequestError = (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 500) {
      console.log('Server error');
    } else {
      console.log(error.response.data.message);
    }
  } else if (error.request) {
    console.log('Network error');
  } else {
    console.log('Unknown error');
  }
};

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    handleHTTPRequestError(error);
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = baseURL;
