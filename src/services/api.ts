import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ce51d157.us-south.apigw.appdomain.cloud/feeling',
});

export default api;
