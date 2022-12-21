import Service from '../../../service';

export const getBrand = options => Service.get('/admin/brands', { ...options });
export const deleteBrand = id => Service.delete(`/admin/brands/${id}`);
