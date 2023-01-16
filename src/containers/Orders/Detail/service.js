import Service from '../../../service';

export const getOrderDetail = id =>
  Service.get(`admin/orders/${id}/detail/${id}`);
export const getOrder = id => Service.get(`/admin/orders/${id}`);
export const deleteOrder = (idOrder, id) =>
  Service.delete(`admin/orders/${idOrder}/detail/${id}`);
