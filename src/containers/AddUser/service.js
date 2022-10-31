import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const createUsers = payload =>
  Service.post(`${BASE_URL}/admin/users`, payload);
