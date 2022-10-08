// eslint-disable-next-line consistent-return
export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user !== 'null';
};
