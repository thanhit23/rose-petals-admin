import Service from '../../service';

export const createUsers = payload => Service.post('/admin/users', payload);
