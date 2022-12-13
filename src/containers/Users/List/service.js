import Service from '../../../service';

export const getUsers = option =>
  Service.get('/admin/users', { role: 'user', ...option });
export const deleteUser = id => Service.delete(`/admin/users/${id}`);
