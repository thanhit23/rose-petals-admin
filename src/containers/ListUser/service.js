import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const getUsers = () => Service.get(`${BASE_URL}/admin/users?role=user`);
export const getUsersByPage = index =>
  Service.get(`${BASE_URL}/admin/users?role=user&page=${index}`);
export const deleteUser = id => Service.delete(`${BASE_URL}/admin/users/${id}`);
