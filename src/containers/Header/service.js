import Service from '../../service';

export const logout = payload => Service.post('/admin/auth/logout', payload);
export const updateAccount = (payload, id) => Service.put(`/admin/users/${id}`, payload);
export const changePassword = password => Service.put('/admin/auth/change-password', { password });
