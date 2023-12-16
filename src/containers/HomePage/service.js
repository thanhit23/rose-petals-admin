import Service from '../../service';

export const getAnalytics = ({ token }) => {
  Service.setBearerToken(token);
  return Service.get('/admin/analytics');
};
