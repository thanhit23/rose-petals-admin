import Service from '../../../service';

export const addBrand = data => Service.post('/admin/brands', data);
