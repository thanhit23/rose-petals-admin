import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const updateUser = (id, data) =>
  Service.patch(`${BASE_URL}/admin/users/${id}`, data);
