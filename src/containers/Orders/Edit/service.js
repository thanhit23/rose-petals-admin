import Service from '../../../service';

export const updateOrder = (id, data) =>
  Service.put(`/admin/orders/${id}`, data);
export const getOrder = id => Service.get(`/admin/orders/${id}`);
