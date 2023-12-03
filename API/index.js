import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.2.42:5000/api/' });