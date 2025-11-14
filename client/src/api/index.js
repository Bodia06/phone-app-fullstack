import axios from 'axios';

const httpDefault = axios.create({ baseURL: 'http://localhost:5001/api' });

export const getPhones = () => httpDefault.get('/phones');
export const createPhones = values => httpDefault.post('/phones', values);
export const deletePhones = id => httpDefault.delete(`/phones/${id}`);
