import Service from '../../../service';

export const getCategories = options =>
  Service.get('/admin/categories', { ...options });
export const deleteCategory = id => Service.delete(`/admin/categories/${id}`);
