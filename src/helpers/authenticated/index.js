// eslint-disable-next-line consistent-return
export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  if (user !== 'null') return true;
};
