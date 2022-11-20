import Service from '../../../service';

export const getBrand = () => Service.get('/admin/brands');
export const deleteBrand = id => Service.delete(`/admin/brands/${id}`);
