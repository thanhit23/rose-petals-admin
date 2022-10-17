import { API_ENDPOINT } from './constants';
import Service from '../../service';

export const getUsers = () => Service.get(API_ENDPOINT);
export const getUsersByPage = index =>
  Service.get(`${API_ENDPOINT}&page=${index}`);
