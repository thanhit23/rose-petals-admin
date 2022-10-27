import Service from '../../service';

export const isMe = () => Service.get('/admin/auth/me');
