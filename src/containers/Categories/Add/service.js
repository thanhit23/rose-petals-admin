import Service from '../../../service';

export const create = payload => Service.post('/admin/categories', payload);
