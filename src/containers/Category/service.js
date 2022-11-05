import { BASE_URL } from '../../service/constants';
import Service from '../../service';

export const get = () => Service.get(`${BASE_URL}/admin/categories`);
export const deleteCategory = id =>
  Service.delete(`${BASE_URL}/admin/categories/${id}`);
