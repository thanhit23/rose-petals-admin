import Service from '../../service';

export const updateUser = (id, data) => Service.put(`/admin/users/${id}`, data);
