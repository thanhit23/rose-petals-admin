import { API_ENDPOINT } from './constants';
import Service from '../../service';

export const login = data => Service.post(API_ENDPOINT, data);
export const setToken = token => Service.setHeader(API_ENDPOINT, token);
