import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const create = payload =>
  Service.post(`${BASE_URL}/admin/categories`, payload);
