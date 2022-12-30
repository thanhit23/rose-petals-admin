import Service from '../../../service';

export const getOrders = option => Service.get('/admin/orders', { ...option });
export const deleteOrder = id => Service.delete(`/admin/orders/${id}`);
