import { useSelector } from 'react-redux';

export const isAuthenticated = () => {
  const isAuth = useSelector(({ global: { auth } }) => auth);
  const token = sessionStorage.getItem('token');

  if (!isAuth) {
    return false;
  }
  return token;
};
