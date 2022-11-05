import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const updateUser = (id, data) =>
  Service.put(`${BASE_URL}/admin/users/${id}`, data);
