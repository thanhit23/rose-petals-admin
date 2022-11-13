import Service from '../../../service';

export const addProduct = data => Service.put('/admin/products', data);
