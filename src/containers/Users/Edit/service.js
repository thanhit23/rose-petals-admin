import Service from '../../../service';

export const updateUser = (id, data) => Service.put(`/admin/users/${id}`, data);
export const getUsers = id => Service.get(`/admin/users/${id}`);
