import Service from '../../../service';

export const getProductReview = option => Service.get('/admin/product-reviews', { ...option });
export const deleteProduct = ({ commentId, productId }) =>
  Service.delete(`/admin/product-reviews/${commentId}?productId=${productId}`);
