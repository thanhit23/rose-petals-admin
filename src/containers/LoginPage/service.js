import Service from '../../service';
export const login = data => Service.post('/admin/auth/login', data);
export const setToken = token => Service.setBearerToken(token);
