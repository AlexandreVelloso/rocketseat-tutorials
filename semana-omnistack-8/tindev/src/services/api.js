import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.90.107.123:3333'
});

export default api;