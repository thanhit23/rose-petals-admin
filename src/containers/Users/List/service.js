import Service from '../../../service';

export const getUsers = (page = 1) =>
  Service.get(`/admin/users?role=user&page=${page}`);
export const deleteUser = id => Service.delete(`/admin/users/${id}`);
