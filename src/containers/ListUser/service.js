import Service from '../../service';

export const getUsers = (index = 1) =>
  Service.get(`/admin/users?role=user&page=${index}`);
export const deleteUser = id => Service.delete(`/admin/users/${id}`);
