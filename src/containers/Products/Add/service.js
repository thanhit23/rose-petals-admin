import Service from '../../../service';

export const addProduct = data => Service.post('/admin/products', data);
export const getAllCategory = () => Service.get('/admin/categories/all');
export const getAllBrand = () => Service.get('/admin/brands/all');
