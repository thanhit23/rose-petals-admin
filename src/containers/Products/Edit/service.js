import Service from '../../../service';

export const updateProduct = (id, data) => Service.put(`/admin/products/${id}`, data);
export const getProduct = id => Service.get(`/admin/products/${id}`);
export const getBrands = () => Service.get('/admin/brands/all');
export const getCategories = () => Service.get('/admin/categories/all');
