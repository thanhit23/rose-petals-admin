import Service from '../../../service';

export const getProductReview = option => Service.get('/admin/product-reviews', { ...option });
export const deleteProduct = id => Service.delete(`/admin/product-reviews/${id}`);
