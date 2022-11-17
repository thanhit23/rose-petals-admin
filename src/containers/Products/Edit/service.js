import Service from '../../../service';

export const updateProduct = (id, data) =>
  Service.put(`/admin/products/${id}`, data);
