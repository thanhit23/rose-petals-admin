import Service from '../../service';

export const logout = payload => Service.post('/admin/auth/logout', payload);
