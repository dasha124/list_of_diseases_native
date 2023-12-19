import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.2.124:8000/' });