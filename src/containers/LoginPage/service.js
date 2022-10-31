import { BASE_URL } from '../../service/constants';
import Service from '../../service';
export const login = data => Service.post(`${BASE_URL}/admin/auth/login`, data);
export const setToken = token =>
  Service.setHeader(`${BASE_URL}/admin/auth/login`, token);
