import { API_ENDPOINT_LOGOUT } from './constants';
import Service from '../../service';

export const logout = tokenRefresh =>
  Service.post(API_ENDPOINT_LOGOUT, tokenRefresh);
