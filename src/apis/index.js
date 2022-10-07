import { API_ENDPOINT } from './constants';
import Service from '../service';

const url = '/products';

export const getList = () => Service.get(`${API_ENDPOINT}${url}`);
export const addProduct = data => Service.post(`${API_ENDPOINT}${url}`, data);
export const deleteProduct = id =>
  Service.delete(`${API_ENDPOINT}${url}/${id}`);
export const searchProduct = keyword =>
  Service.get(`${API_ENDPOINT}${url}?search=${keyword}`);
export const updateProducts = (data, id) =>
  Service.put(`${API_ENDPOINT}${url}/${id}`, data);
