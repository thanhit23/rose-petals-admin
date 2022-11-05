import Service from '../../service';

export const get = () => Service.get('/admin/categories');
export const deleteCategory = id => Service.delete(`/admin/categories/${id}`);
