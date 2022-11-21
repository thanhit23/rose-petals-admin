import Service from '../../../service';

export const getDetailBrand = id => Service.get(`/admin/brands/${id}`);
export const updateBrand = (id, data) =>
  Service.put(`/admin/brands/${id}`, data);
