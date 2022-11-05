import Service from '../../service';

export const update = (id, data) =>
  Service.put(`/admin/categories/${id}`, data);
