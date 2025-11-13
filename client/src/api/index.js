import axios from 'axios';

const httpDefault = axios.create({ baseURL: 'http://localhost:5001/api' });

export const getPhones = () => httpDefault.get('/phones');
