import Service from '../../../service';

export const getProducts = option => Service.get('/admin/products', { ...option });
export const deleteProduct = id => Service.delete(`/admin/products/${id}`);
