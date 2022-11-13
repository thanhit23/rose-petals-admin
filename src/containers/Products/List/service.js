import Service from '../../../service';

export const getProducts = (page = 1) =>
  Service.get(`/admin/products?page=${page}`);
export const deleteProduct = id => Service.delete(`/admin/products/${id}`);
