import Service from '../../../service';

export const addProduct = data => Service.put('/admin/products', data);
export const getAllCategory = () => Service.get('/admin/categories/all');
