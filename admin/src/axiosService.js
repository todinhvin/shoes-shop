import axios from 'axios';
const API_ENDPOINT = 'https://backend-shoesshop.herokuapp.com/api';

function handleSuccess(response) {
  return response;
}

function handleError(error) {
  return Promise.reject(error);
}

const instance = axios.create({
  baseURL: API_ENDPOINT,
});
instance.interceptors.response.use(handleSuccess, handleError);

export default instance;
