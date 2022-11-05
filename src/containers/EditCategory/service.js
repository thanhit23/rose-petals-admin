import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const update = (id, data) =>
  Service.put(`${BASE_URL}/admin/categories/${id}`, data);
